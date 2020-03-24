import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}


  const ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'DAI22',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen .`
    }, {
      position: 2,
      name: 'DAI22',
      weight: 4.0026,
      symbol: 'He',
      description: `Helium .`
    }, {
      position: 3,
      name: 'DAI22',
      weight: 6.941,
      symbol: 'Li',
      description: `Lithium .`
    }, {
      position: 4,
      name: 'DAI22',
      weight: 9.0122,
      symbol: 'Be',
      description: `Beryllium .`
    }, {
      position: 5,
      name: 'DAI22',
      weight: 10.811,
      symbol: 'B',
      description: `Boron .`
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      description: `Carbon .`
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      description: `Nitrogen `
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      description: `Oxygen.`
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      description: `Fluorine.`
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      description: `Neon is `
    },
  ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = ELEMENT_DATA;
  col:object = ['position', 'name', 'weight', 'symbol', 'description'];

  constructor() { }

  ngOnInit() {

  }

}
