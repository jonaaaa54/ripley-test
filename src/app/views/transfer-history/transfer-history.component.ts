import { Component, OnInit } from '@angular/core';

interface Car {
  manufacturer: string;
  model: string;
  powerSupply: "petrol" | "diesel" | "electricity";
};
@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit {
  public displayedColumns = ["manufacturer", "model", "powerSupply"];
  public dataSource: Car[] = [
    {
      manufacturer: "Tesla",
      model: "Model 3",
      powerSupply: "electricity",
    },
    {
      manufacturer: "Ferrari",
      model: "458",
      powerSupply: "petrol",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
