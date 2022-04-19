import { Injectable } from '@angular/core';

export interface ToastData {
  id: string;
  delay: number;
  message: string;
  classname: string;
};

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private static lastId = 0;
  toasts: ToastData[] = [];

  constructor() {
  };

  addToast(options: Partial<ToastData>): string {
    const id = (AlertsService.lastId++).toString(10);
    this.toasts.push({
      id,
      delay: 5000,
      message: '',
      classname: '',
      ...options,
    });
    return id;
  };

  removeToast(id: string): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  };

  showToast(message: string) {
    this.addToast({ message });
  };

  showToastSuccess(message: string): void {
    this.addToast({
      message,
      classname: 'bg-success text-light',
      delay: 10000
    });
  };

  showToastDanger(message: string): void {
    this.addToast({
      message,
      classname: 'bg-danger text-light',
      delay: 15000
    });
  };

};
