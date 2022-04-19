import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardResultComponent } from './splitboard-result.component';

describe('SplitboardResultComponent', () => {
  let component: SplitboardResultComponent;
  let fixture: ComponentFixture<SplitboardResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
