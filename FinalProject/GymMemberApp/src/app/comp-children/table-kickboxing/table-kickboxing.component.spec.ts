import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableKickboxingComponent } from './table-kickboxing.component';

describe('TableKickboxingComponent', () => {
  let component: TableKickboxingComponent;
  let fixture: ComponentFixture<TableKickboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableKickboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableKickboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
