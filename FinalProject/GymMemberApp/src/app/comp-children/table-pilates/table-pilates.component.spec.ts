import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePilatesComponent } from './table-pilates.component';

describe('TablePilatesComponent', () => {
  let component: TablePilatesComponent;
  let fixture: ComponentFixture<TablePilatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePilatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePilatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
