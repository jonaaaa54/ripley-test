import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransferenceComponent } from './new-transference.component';

describe('NewTransferenceComponent', () => {
  let component: NewTransferenceComponent;
  let fixture: ComponentFixture<NewTransferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
