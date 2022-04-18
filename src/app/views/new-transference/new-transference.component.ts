import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { getMessage } from 'src/app/constants/message-factory';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiAppService } from 'src/app/services/api-requests/api-app.service';
import { Receiver, TransferToReceiver, TransferToReceiverFormControl } from 'src/app/models/receiver-model';

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})
export class NewTransferenceComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  isReceiver: boolean = true;
  receiver: Receiver | undefined;

  subscription: Subscription | undefined;
  subscription2: Subscription | undefined;

  receiverTransferForm: TransferToReceiverFormControl =
    this.formBuilder.group({
      receiver: [null, [Validators.required]],
      amount: [null, [Validators.required, this.validAmount]]
    }) as TransferToReceiverFormControl;

  constructor(
    private alerts: AlertsService,
    private formBuilder: FormBuilder,
    private apiService: ApiAppService
  ) { };

  ngOnInit(): void {
  };

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  };

  private validAmount(amount: FormControl): { valid: boolean } | null {
    return amount.value > 0 ? null : {
      valid: true
    };
  };

  isReceiverValid(): void {
    const { receiver } = this.receiverTransferForm.value;
    
    this.loading = true;
    this.isReceiver = false;
    receiver &&
      (this.subscription = this.apiService.getReceiverByRut(receiver as unknown as string)
        .subscribe(
          res => {
            res && res.ok
              ? this.receiverFound(res.data)
              : this.receiverNotFound();
          })
      );
    this.loading = false;
  };

  transfer(): void {
    const transference: TransferToReceiver = this.receiverTransferForm.value;
    transference.receiver = this.receiver as Receiver;
    this.subscription2 = this.apiService.addTransference(transference)
      .subscribe(
        res => {
          res && res.ok
            ? this.savedTransference()
            : this.alerts.showToastDanger(getMessage('app.transference.add.error'));
        }
      );
  };

  private savedTransference(): void {
    this.alerts.showToastSuccess(getMessage('app.transference.add.success'));
    this.receiverTransferForm.reset();
  };

  private receiverNotFound(): void {
    this.alerts.showToastDanger(getMessage('app.transference.add.error'));
    this.receiver = undefined;
  };

  private receiverFound(data: Receiver): void {
    this.isReceiver = true
    this.receiver = data;
  };

};
