import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYouGearComponent } from './choose-you-gear.component';

describe('ChooseYouGearComponent', () => {
  let component: ChooseYouGearComponent;
  let fixture: ComponentFixture<ChooseYouGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYouGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYouGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
