import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent implements OnInit {
  public sub: any;
  data: object;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.data = params;
    });
  }

}

