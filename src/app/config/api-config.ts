import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ApiFactory {

  public readonly API_APP: string = environment.API_APP;
  public readonly API_BANK: string = environment.API_BANK;

  constructor() { 
  };

};
