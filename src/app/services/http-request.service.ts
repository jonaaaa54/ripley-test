import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) {
  };

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  };

  public getWithHeaders<T>(
    url: string,
    option: any): Observable<HttpEvent<T>> {
    return this.httpClient.get<T>(url, option);
  };

  public post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(url, data);
  };

  public postWithHeaders<T>(
    url: string,
    data: any,
    option?: any): Observable<HttpEvent<T>> {
    return this.httpClient.post<T>(url, data, option);
  };

  public put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<T>(url, data);
  };

  public putWithHeaders<T>(
    url: string,
    data: any,
    option?: any): Observable<HttpEvent<T>> {
    return this.httpClient.put<T>(url, data, option);
  };

  public delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  };

  public deleteWithHeaders<T>(
    url: string,
    option?: any): Observable<HttpEvent<T>> {
    return this.httpClient.delete<T>(url, option);
  };

};
