import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryinboxComponent } from './historyinbox.component';

describe('HistoryinboxComponent', () => {
  let component: HistoryinboxComponent;
  let fixture: ComponentFixture<HistoryinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
