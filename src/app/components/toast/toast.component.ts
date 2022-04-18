import { Component, OnInit } from '@angular/core';

import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(public service: AlertsService) {
  };

  ngOnInit(): void {
  };

};
