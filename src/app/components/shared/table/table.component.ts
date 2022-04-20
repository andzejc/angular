import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/Car";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

 @Input() mockCars: Car[] | undefined;

 @Output() labelEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  sendLabel(): void {
    this.labelEvent.emit('Kazkoks naujas pranesimas');
  }

  sendSelectedProduct() {

  }

}
