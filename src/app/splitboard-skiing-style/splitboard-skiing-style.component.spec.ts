import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardSkiingStyleComponent } from './splitboard-skiing-style.component';

describe('SplitboardSkiingStyleComponent', () => {
  let component: SplitboardSkiingStyleComponent;
  let fixture: ComponentFixture<SplitboardSkiingStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardSkiingStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardSkiingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
