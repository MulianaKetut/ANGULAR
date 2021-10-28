import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReactiveFormComponent } from './template-reactive-form.component';

describe('TemplateReactiveFormComponent', () => {
  let component: TemplateReactiveFormComponent;
  let fixture: ComponentFixture<TemplateReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
