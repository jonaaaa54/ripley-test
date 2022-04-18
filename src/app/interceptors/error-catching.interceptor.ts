import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  };

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            this.router.navigate(['/transfer-history']);
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.router.navigate(['/transfer-history']);
          }
          return throwError(() => errorMsg);
        }));
  };
};
