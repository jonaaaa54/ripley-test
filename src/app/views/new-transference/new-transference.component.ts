import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Receiver, TransferToReceiverFormControl } from 'src/app/models/receiver-model';

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})
export class NewTransferenceComponent implements OnInit {
  receiver: Receiver | undefined;

  receiverTransferForm: TransferToReceiverFormControl =
    this.formBuilder.group({
      amount: [null, [Validators.required, this.validAmount]],
      receiver: [null, [Validators.required]]
    }) as TransferToReceiverFormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  transfer() {
    console.log(this.receiverTransferForm.value);
  };

  private validAmount(amount: FormControl) {
    return amount.value > 0 ? null : {
      valid: true
    };
  }
}
