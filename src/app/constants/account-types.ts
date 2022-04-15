import { AccountType } from "../models/account-model";

export const ACCOUNT_TYPES_FACTORY: AccountType[] = [
  { 
    name: 'Cuenta Corriente',
    code: 'CC',
  },
  {
    name: 'Cuenta Vista',
    code: 'CV',
  },
  {
    name: 'Cuenta Ahorro',
    code: 'CA',
  },
  {
    name: 'Chequera electronica',
    code: 'CE',
  }
];