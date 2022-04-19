import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Column, Row } from 'src/app/models/components/table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() rows: Row<T>[] | undefined;
  @Input() columns?: Column<T>[] = [];

  constructor() { 
  };

  ngOnInit(): void {
  };

};
