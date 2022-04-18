import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Banks } from 'src/app/models/banks-model';
import { AccountType } from 'src/app/models/account-model';
import { AlertsService } from 'src/app/services/alerts.service';
import { ACCOUNT_TYPES_FACTORY } from 'src/app/constants/account-types';
import { Receiver, ReceiverFormControl } from 'src/app/models/receiver-model';
import { ApiBanksService } from 'src/app/services/api-requests/api-banks.service';

@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss']
})

export class NewReceiverComponent implements OnInit, OnDestroy {
  banks: Banks | undefined;
  subscription: Subscription | undefined;
  accountTypes: AccountType[]  = ACCOUNT_TYPES_FACTORY;

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
  };

  saveReceiver(): void {
    this.alerts.showToastSuccess('Receptor creado exitosamente');
    console.log(this.newReceiverForm.value);
  };

};
