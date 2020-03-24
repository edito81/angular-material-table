import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTwoComponent } from './table-two.component';

describe('TableExampleComponent', () => {
  let component: TableTwoComponent;
  let fixture: ComponentFixture<TableTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
