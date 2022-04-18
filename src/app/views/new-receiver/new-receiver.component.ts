import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Banks } from 'src/app/models/banks-model';
import { AccountType } from 'src/app/models/account-model';
import { AlertsService } from 'src/app/services/alerts.service';
import { ACCOUNT_TYPES_FACTORY } from 'src/app/constants/account-types';
import { Receiver, ReceiverFormControl } from 'src/app/models/receiver-model';
import { ApiBanksService } from 'src/app/services/api-requests/api-banks.service';
import { ApiAppService } from 'src/app/services/api-requests/api-app.service';
import { getMessage } from 'src/app/constants/message-factory';

@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss']
})

export class NewReceiverComponent implements OnInit, OnDestroy {
  banks: Banks | undefined;
  isReceiver: boolean = false;
  savedReceiver: boolean = false;
  accountTypes: AccountType[] = ACCOUNT_TYPES_FACTORY;

  subscription: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;

  newReceiverForm: ReceiverFormControl =
    this.formBuilder.group({
      phone: [null],
      rut: ['', [Validators.required]],
      name: ['', [Validators.required]],
      bank: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
      accountNumber: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    }) as ReceiverFormControl;

  constructor(
    private alerts: AlertsService,
    private formBuilder: FormBuilder,
    private apiAppService: ApiAppService,
    private apiBankService: ApiBanksService
  ) { };

  ngOnInit(): void {
    this.subscription = this.apiBankService.getBanks()
      .subscribe(
        banks => this.banks = banks
      );
  };

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
  };

  private saveReceiver(): void {
    const receiver: Receiver = this.newReceiverForm.value;
    this.subscription3 = this.apiAppService.addReceiver(receiver)
      .subscribe(
        res => {
          if (res && res.ok) {
            this.alerts.showToastSuccess(getMessage('app.receiver.add.success'));
            this.newReceiverForm.reset();
          } else this.alerts.showToastDanger(getMessage('app.receiver.add.error'));
        });
  };

  onSubmit(): void {
    const { rut } = this.newReceiverForm.value;
    this.subscription2 = this.apiAppService.getReceiverByRut(rut)
      .subscribe(
        res => {
          res && res.ok
            ? this.alerts.showToastDanger(getMessage('app.receiver.rut.exist'))
            : this.saveReceiver();
        });
  };
};
