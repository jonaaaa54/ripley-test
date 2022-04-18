import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor() {
  };

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          console.log(errorMsg);
          return throwError(() => errorMsg);
        }))
  };
};
