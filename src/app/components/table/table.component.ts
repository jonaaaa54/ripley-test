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
  @Input() getColumns?: boolean = false; 
  @Input() columns?: Column<T>[] = [];

  localColumns: string[] = [];

  constructor(private router: Router) { 
    if(this.getColumns) this.localColumns = this.getColumnsFromObject();
  }

  ngOnInit(): void {
    if(this.getColumns) this.localColumns = this.getColumnsFromObject(); 
  }

  private getColumnsFromObject(): string[] {
    if(this.rows)
      return Object.keys(this.rows)
        .map( keys =>
          (keys.replace(/[A-Z]/g, ' $&').trim()).toLowerCase()
        );
    return [];
  };

};
