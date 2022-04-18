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
import { AlertsService } from '../services/alerts.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private alerts: AlertsService
  ) {};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map(res => res),
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            /** Client-side error. */
            this.alerts.showToastDanger('Error');
            this.router.navigate(['/transfer-history']);
          } else {
            this.alerts.showToastDanger('Server-side error.');
            this.router.navigate(['/transfer-history']);
          };
          return throwError(() => error.message);
        }));
  };
};
