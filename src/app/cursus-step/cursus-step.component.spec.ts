import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusStepComponent } from './cursus-step.component';

describe('CursusStepComponent', () => {
  let component: CursusStepComponent;
  let fixture: ComponentFixture<CursusStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursusStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursusStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
