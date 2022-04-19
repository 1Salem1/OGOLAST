import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardSpeedComponent } from './splitboard-speed.component';

describe('SplitboardSpeedComponent', () => {
  let component: SplitboardSpeedComponent;
  let fixture: ComponentFixture<SplitboardSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
