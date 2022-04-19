import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardTurnComponent } from './splitboard-turn.component';

describe('SplitboardTurnComponent', () => {
  let component: SplitboardTurnComponent;
  let fixture: ComponentFixture<SplitboardTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
