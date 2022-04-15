import { AbstractControl, FormGroup } from "@angular/forms";

export interface Receiver {
  /** Rut and id of the receiver. */
  rut: string; 
  /** Bank name of the receiver. */
  bank: string;
  /** Name of the receiver. */
  name: string;
  /** Phone of the receiver. */
  phone: string;
  /** Email of the receiver. */
  email: string;
  /** Type of bank account of the receiver. */ 
  accountType: string;
  /** Number of bank account of the receiver. */
  accountNumber: number;
};

export interface ReceiverFormControl extends FormGroup {
  /** Receiver Form values. */
  value: Receiver;

  /** From control receiver. */
  controls: {
    rut: AbstractControl;
    bank: AbstractControl;
    name: AbstractControl;
    phone: AbstractControl;
    email: AbstractControl;
    accountType: AbstractControl;
    accountNumber: AbstractControl;
  };
};

export interface TransferToReceiver {
  /** Amount to transfer. */
  amount: number;
  /** Receiver to transfer. */
  receiver: string;
};

export interface TransferToReceiverFormControl extends FormGroup {
  /** Transfer to receiver Form values. */
  value: TransferToReceiver;

  /** From control transfer to receiver. */
  controls: {
    amount: AbstractControl;
    receiver: AbstractControl;
  };
};