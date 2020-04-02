import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from '../helpers/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatTable } from '@angular/material';
import { ContentData } from '../interface/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  productSearchForm: FormGroup;
  results = data;
  allResults = data;
  fakeData: ContentData[];

  columns: any[] = [
    {
      // tslint:disable-next-line:arrow-return-shorthand
      columnDef: 'contentName', link: 'yes',
      displayIconOnCondition: (params) => {
        return params.status === 'Published' || params.status === 'Unpublished';
      }
      , header: 'CONTENT NAME', dataName: row => `${row.contentName}`
    },
    { columnDef: 'provider', header: 'PROVIDER', dataName: row => `${row.provider}` },
    { columnDef: 'type', header: 'TYPE', dataName: row => `${row.type}` },
    { columnDef: 'uploadedOn', header: 'UPLOADED ON', dataName: row => `${row.uploadedOn}` },
    {
      columnDef: 'status', header: 'STATUS', method: 'yes',
      displayIconOnCondition: (params) => {
        switch (params.status) {
          case 'Published':
            return this.iconForPublished();
          case 'Unpublished':
            return this.iconForUnpublished();
          case 'Missing mandatory Info':
            return this.iconForMissingMandatory();
          case 'Importing':
            return this.iconForImporting();
        }
      }
      , actionsConfig: [
        {
          icon: 'edit',
          name: 'Edit',
          type: 'buttonIcon',
          method: (params) => this.openDialog(params, params)
        },
        {
          icon: 'delete',
          name: 'Delete',
          type: 'buttonIcon',
          method: (params) => this.deleteRow(params)
        }
      ],
      displaySelect: (params) => {
        return params.status === 'Published' || params.status === 'Unpublished';
      },
      dataName: row => `${row.status}`
    },
  ];

  pageIndex = 1;
  pageSize = 25;
  metaCount: number;

  constructor(public dialog: MatDialog) {
    this.fakeData = data;
  }

  ngOnInit() {
    this.productSearchForm = new FormGroup({
      productSearchBox: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj
    });
  }

  deleteRow(params) {
    this.fakeData = this.fakeData.filter(value => {
      return value.contentName !== params.contentName;
    });
  }

  onSubmit() {
    this.getProductsSearched(this.productSearchForm.value.productSearchBox);
  }

  getProductsSearched(searchTerm) {
    this.allResults = this.fakeData;
  }


  iconForPublished(): string {
    return `
    <i class="fa fa-circle"  aria-hidden="true"></i>
      `;
  }
  iconForUnpublished(): string {
    return `
    <i class="fa fa-circle-o" aria-hidden="true"></i>
      `;
  }

  iconForMissingMandatory(): string {
    return `
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      `;
  }

  iconForImporting(): string {
    return `
     <i class="fa fa-refresh" aria-hidden="true"></i>
      `;
  }

  getAllProducts(pageIndex: number, pageSize: number) {
    this.allResults = this.fakeData;
    this.metaCount = this.results.length;
  }

  tabClick(tab) {
    // tslint:disable-next-line:no-conditional-assignment
    if ((tab.index = 1)) {
      this.getAllProducts(this.pageIndex, this.pageSize);
    }
  }

  updatePagination(event) {
    const correctedIndex = event.pageIndex + 1;
    this.getAllProducts(correctedIndex, event.pageSize);
  }

}
