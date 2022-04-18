import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiFactory } from 'src/app/config/api-config';
import { Receiver } from 'src/app/models/receiver-model';
import { ResponseBase } from 'src/app/models/response-base';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAppService {
  
  constructor(
    private apiUrls: ApiFactory,
    private httpService: HttpRequestService
  ) {};

  addReceiver(data: Receiver): Observable<ResponseBase<Receiver>> {
      return this.httpService.post(this.apiUrls.API_APP + '/receiver', data);
  };

  getReceiverByRut(rut: string): Observable<ResponseBase<Receiver>> {
    return this.httpService.get(this.apiUrls.API_APP + '/transference/' + rut);
  };

}
