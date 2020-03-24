import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-angular-material-table',
  styleUrls: ['./angular-material-table.component.css'],
  templateUrl: './angular-material-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class AngularMaterialtableComponent implements OnInit {
  @Input() ELEMENT_DATA: any[] = [];
  @Input() ACTIONS: boolean;
  @Input() COL: any[] = [];
  expandedElement: null;

  ngOnInit() {
  }
}
