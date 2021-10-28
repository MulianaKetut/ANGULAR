import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoReactiveFormComponent } from './add-todo-reactive-form.component';

describe('AddTodoReactiveFormComponent', () => {
  let component: AddTodoReactiveFormComponent;
  let fixture: ComponentFixture<AddTodoReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
