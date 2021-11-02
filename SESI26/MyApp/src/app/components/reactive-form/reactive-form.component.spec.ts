import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactiveFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render email and password input element', () => {
    const compiled = fixture.debugElement.nativeElement;
    const formElement = compiled.querySelector('#loginForm');
    const emailInputElement = formElement.querySelector('input[id="email"]');
    const passwordInputElement = formElement.querySelector(
      'input[id="password"]'
    );

    expect(emailInputElement).toBeTruthy();
    expect(passwordInputElement).toBeTruthy();
  });

  it('Check initial value of login form group', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValue = {
      email: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormValue);
  });

  it('Validate email input: `required, minLength(5), email type`', () => {
    const email = component.email;

    email?.setValue('');
    expect(email?.hasError('required')).toBeTruthy();
    email?.setValue('abcd');
    expect(email?.hasError('minlength')).toBeTruthy();
    email?.setValue('abcdefghij');
    expect(email?.hasError('email')).toBeTruthy();
  });

  it('Invalid form when empty', () => {
    const email = component.email;
    const password = component.password;

    email?.setValue('');
    password?.setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  const validUser = {
    email: 'test@gmail.com',
    password: '12345',
  };

  it('Check form validity when validators are fullfiled', () => {
    const compiled = fixture.debugElement.nativeElement;
    const emailInputElement = compiled.querySelector('input[id="email"]');
    const passwordInputElement = compiled.querySelector('input[id="password"]');

    if (!!emailInputElement && !!passwordInputElement) {
      emailInputElement.value = validUser.email;
      emailInputElement.dispatchEvent(new Event('input'));

      passwordInputElement.value = validUser.password;
      passwordInputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
    }

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('Submitting form and set currentUser', () => {
    const compiled = fixture.debugElement.nativeElement;
    const emailInputElement = compiled.querySelector('input[id="email"]');
    const passwordInputElement = compiled.querySelector('input[id="password"]');

    if (!!emailInputElement && !!passwordInputElement) {
      emailInputElement.value = validUser.email;
      emailInputElement.dispatchEvent(new Event('input'));

      passwordInputElement.value = validUser.password;
      passwordInputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
    }

    const button = compiled.querySelector('button');
    button.click();

    expect(component.currentUser.email).toEqual(validUser.email);
    expect(component.currentUser.isLogin).toBeTruthy();
  });
});
