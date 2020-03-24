import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialtableComponent } from './angular-material-table.component';

describe('AngularMaterialtableComponent', () => {
  let component: AngularMaterialtableComponent;
  let fixture: ComponentFixture<AngularMaterialtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
