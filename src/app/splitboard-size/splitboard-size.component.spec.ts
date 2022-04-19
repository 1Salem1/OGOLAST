import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardSizeComponent } from './splitboard-size.component';

describe('SplitboardSizeComponent', () => {
  let component: SplitboardSizeComponent;
  let fixture: ComponentFixture<SplitboardSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
