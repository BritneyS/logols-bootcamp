import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSwimComponent } from './table-swim.component';

describe('TableSwimComponent', () => {
  let component: TableSwimComponent;
  let fixture: ComponentFixture<TableSwimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSwimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSwimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
