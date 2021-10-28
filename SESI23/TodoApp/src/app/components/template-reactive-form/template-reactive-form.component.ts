import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-reactive-form',
  templateUrl: './template-reactive-form.component.html',
  styleUrls: ['./template-reactive-form.component.css'],
})
export class TemplateReactiveFormComponent implements OnInit {
  isSubmitted: boolean = false;
  currentUser: {
    isLogin: boolean;
    username: string;
    password: string;
  } = {
    isLogin: false,
    username: '',
    password: '',
  };
  //validator
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      //Minimal delapan karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka
      Validators.pattern(
        // '^(?=\P{Ll}*\p{Ll})(?=\P{Lu}*\p{Lu})(?=\P{N}*\p{N})(?=[\p{L}\p{N}]*[^\p{L}\p{N}])[\s\S]{8,}$'
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$'
        // '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
      ),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  //mengambil value username dan memunculkan alert di html
  get username() {
    return this.loginForm.get('username');
  }
  //mengambil value password dan memunculkan alert di html
  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    // this.isSubmitted = true;
    // this.validateForm();
    console.log(this.username);

    this.currentUser = {
      isLogin: true,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
  }

  // validateForm() {
  //   if(this.username?.errors){
  //     console.log(this.username.status);
  //   }
  // }

  handleLoginForm() {
    this.isSubmitted = true;
  }

  handleIsSubmittedState() {
    if (this.isSubmitted === true) {
      this.isSubmitted = false;
    }
  }
}
