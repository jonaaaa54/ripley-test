import { Component, OnInit, Input } from '@angular/core';
import { Column, Row } from 'src/app/models/components/table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() columns: Column<T>[] = [];
  @Input() rows: Row<T>[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
