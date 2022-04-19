import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardYourTerrainTypeComponent } from './splitboard-your-terrain-type.component';

describe('SplitboardYourTerrainTypeComponent', () => {
  let component: SplitboardYourTerrainTypeComponent;
  let fixture: ComponentFixture<SplitboardYourTerrainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardYourTerrainTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitboardYourTerrainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
