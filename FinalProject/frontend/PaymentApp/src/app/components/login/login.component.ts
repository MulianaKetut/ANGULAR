import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signinForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\[\]"\';:_\-<>\., =\+\/\\]).{8,}$/
      ),
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get password() {
    return this.signinForm.get('password');
  }

  get email() {
    return this.signinForm.get('email');
  }

  signIn() {
    this.authService.signIn(this.signinForm.value).subscribe(
      (res) => {
        // console.log('LOGIN SUCCESS', res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.signinForm.reset();
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('refresh_token', res.refreshToken);
        this.router.navigate(['home']);
      },
      (error) => {
        // console.log('LOGIN ERROR ', error);
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
