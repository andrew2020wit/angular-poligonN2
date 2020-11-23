import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeDinamicFormComponent } from './native-dinamic-form.component';

describe('NativeDinamicFormComponent', () => {
  let component: NativeDinamicFormComponent;
  let fixture: ComponentFixture<NativeDinamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeDinamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeDinamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
