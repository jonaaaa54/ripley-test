import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, timeout } from 'rxjs';
import { TransferToReceiver } from '../models/receiver-model';
import { ResponseBase } from '../models/response-base';
import { ApiAppService } from '../services/api-requests/api-app.service';

@Injectable({
  providedIn: 'root'
})
export class TransferHistoryContentResolver implements Resolve<ResponseBase<TransferToReceiver[]>> {
  constructor(private apiAppService: ApiAppService) { }

  resolve(): 
    Observable<ResponseBase<TransferToReceiver[]>> | Promise<ResponseBase<TransferToReceiver[]>> | ResponseBase<TransferToReceiver[]> {
    return this.apiAppService.getAllTransferences().pipe(
      catchError(error => {
        return of(error);
      }));
  };

}
