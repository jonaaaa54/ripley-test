import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiFactory } from '../../config/api-config';

import { Banks } from '../../models/banks-model';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiBanksService {

  constructor(
    private apiUrls: ApiFactory,
    private httpService: HttpRequestService
  ) {};

  getBanks(): Observable<Banks> {
    return this.httpService.get<Banks>(`${this.apiUrls.API_BANK}/banks.php`);
  };
 
};
