import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { firstValueFrom } from 'rxjs';

import { TableData } from 'src/app/models/components/table-models';
import { TransferToReceiver } from 'src/app/models/receiver-model';
import { TABLE_DEFAULT_HEADERS } from 'src/app/constants/components/table-headers';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {
  tableData: TableData[] = [];
  tableHeaders = TABLE_DEFAULT_HEADERS;
  transferences: TransferToReceiver[] = [];

  constructor(private route: ActivatedRoute) {
  };

  async ngOnInit(): Promise<void> {
    const data = await firstValueFrom(this.route.data);
    this.transferences = data['transferHistory'].data;
    this.tableData = this.getTableData(this.transferences);
  };

  getTableData(transferences: TransferToReceiver[]): TableData[] {
    return transferences.map(transfer => {
      return {
        name: transfer.receiver.name,
        rut: transfer.receiver.rut,
        bank: transfer.receiver.bank,
        accountType: transfer.receiver.accountType,
        amount: transfer.amount,
      };
    })
  };

};
