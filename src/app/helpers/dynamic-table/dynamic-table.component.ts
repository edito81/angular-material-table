import { Component, ViewChild, Input, OnChanges, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnChanges, OnInit {
  @Input() displayedColumns: string[];
  @Input() receivedData: any[] = [];
  @Input() tableTitle: string;
  @Input() columns: any[] = [];
  @Input() metaCount: number;

  @Output() clickedItem = new EventEmitter();
  @Output() pageEvent = new EventEmitter<PageEvent>();

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageIndex = 0;
  pageSize = 25;
  length;
  highlightByRow: object;

  constructor() { }
  ngOnInit(): void { }

  ngOnChanges() {
    if (this.columns !== undefined || this.columns !== null) {
      this.dataSource = new MatTableDataSource(this.receivedData);
      const select = this.columns.map(x => x.columnDef);
      this.displayedColumns = ['select', ...select];
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = this.pageSize;
      this.dataSource.paginator.pageIndex = this.pageIndex;
      this.dataSource.paginator.length = this.receivedData.length;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  highlightRow(row) {
    this.highlightByRow = row;
  }

  updateProductsTable(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.pageEvent.emit(event);
  }

  viewItem(guid) {
    this.clickedItem.emit(guid);
  }

}

