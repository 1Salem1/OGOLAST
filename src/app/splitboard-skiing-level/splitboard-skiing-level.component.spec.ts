import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardSkiingLevelComponent } from './splitboard-skiing-level.component';

describe('SplitboardSkiingLevelComponent', () => {
  let component: SplitboardSkiingLevelComponent;
  let fixture: ComponentFixture<SplitboardSkiingLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardSkiingLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardSkiingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
