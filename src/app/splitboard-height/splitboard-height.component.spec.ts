import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardHeightComponent } from './splitboard-height.component';

describe('SplitboardHeightComponent', () => {
  let component: SplitboardHeightComponent;
  let fixture: ComponentFixture<SplitboardHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
