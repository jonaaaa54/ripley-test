import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) {
  };

  public get(url: string, option?: any){
    return this.httpClient.get(url, option);
  };

  public post(url: string, data: any, option?: any){
    return this.httpClient.post(url, data,option);
  };

  public put(url: string, data: any, option?: any) {
    return this.httpClient.put(url, data, option);
  };

  public delete(url: string, option?: any){
    return this.httpClient.delete(url, option);
  };
};
