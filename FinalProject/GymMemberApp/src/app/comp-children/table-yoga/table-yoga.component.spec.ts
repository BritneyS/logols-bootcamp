import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYogaComponent } from './table-yoga.component';

describe('TableYogaComponent', () => {
  let component: TableYogaComponent;
  let fixture: ComponentFixture<TableYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
