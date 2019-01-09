import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorywithdrawComponent } from './historywithdraw.component';

describe('HistorywithdrawComponent', () => {
  let component: HistorywithdrawComponent;
  let fixture: ComponentFixture<HistorywithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorywithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorywithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
