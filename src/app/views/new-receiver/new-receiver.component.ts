import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AccountType } from 'src/app/models/account-model';
import { ACCOUNT_TYPES_FACTORY } from 'src/app/constants/account-types';
import { Receiver, ReceiverFormControl } from 'src/app/models/receiver-model';

@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss']
})

export class NewReceiverComponent implements OnInit {
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

  constructor(private formBuilder: FormBuilder) { };

  ngOnInit(): void { };

  saveReceiver(): void { 
    console.log(this.newReceiverForm.value);
  };

};
