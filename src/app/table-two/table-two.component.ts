import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  serialNumber: string;
  number: number;
  weight: number;
  symbol: string;
  actions: Object;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    number: 1,
    serialNumber: 'HAI21',
    weight: 1.0079,
    symbol: 'H',
    actions: {
      name: 'Some Random Text',
      icon: 'home'
    }
  }, {
    number: 2,
    serialNumber: 'HAI21',
    weight: 4.0026,
    symbol: 'He',
    actions: {
      name: 'Some Random Text',
      icon: 'space'
    }
  }
  , {
    number: 3,
    serialNumber: 'HAI21',
    weight: 6.941,
    symbol: 'Li',
    actions: {
      name: 'Some Random Text',
      icon: 'home'
    }
  }
  , {
    number: 4,
    serialNumber: 'HAI21',
    weight: 9.0122,
    symbol: 'Be',
    actions: {
      name: 'Some Random Text',
      icon: 'space'
    }
  }
  , {
    number: 5,
    serialNumber: 'HAI21',
    weight: 10.811,
    symbol: 'B',
    actions: {
      name: 'Some Random Text',
      icon: 'home'
    }
  }
  , {
    number: 6,
    serialNumber: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    actions: {
      name: 'Some Random Text',
      icon: 'space'
    }
  }
  , {
    number: 7,
    serialNumber: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    actions: {
      name: 'Some Random Text',
      icon: 'home'
    }
  }
  , {
    number: 8,
    serialNumber: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    actions: {
      name: 'Some Random Text',
      icon: 'space'
    }
  }
  , {
    number: 9,
    serialNumber: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    actions: {
      name: 'Some Random Text',
      icon: 'home'
    }
  }
  , {
    number: 10,
    serialNumber: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    actions: {
      name: 'Some Random Text',
      icon: 'space'
    }
  }
  ,
];

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})

export class TableTwoComponent implements OnInit {
  data = ELEMENT_DATA;
  actions: boolean = true;
  col: object = ['number', 'serialNumber', 'weight', 'symbol'];

  constructor() { }

  ngOnInit() {
  }

}
