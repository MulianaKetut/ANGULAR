import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Role } from 'src/app/models/Role';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from 'src/app/validators/match.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  addNewUserForm: FormGroup;
  roles: Role[] = [
    {
      name: 'Admin',
      value: 0,
    },
    {
      name: 'User',
      value: 1,
    },
  ];
  userId: number = -1;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();
  modify: string | null = localStorage.getItem('modify');

  constructor(
    private builder: FormBuilder,
    private userService: UserService,
    private bsModalRef: BsModalRef
  ) {
    this.addNewUserForm = this.builder.group(
      {
        title: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validator: ConfirmedValidator('password', 'confirmPassword') }
    );

    this.setDataUser();
  }

  ngOnInit(): void {}

  get f() {
    return this.addNewUserForm.controls;
  }

  get title() {
    return this.addNewUserForm.get('title');
  }

  get firstName() {
    return this.addNewUserForm.get('firstName');
  }

  get lastName() {
    return this.addNewUserForm.get('lastName');
  }

  get role() {
    return this.addNewUserForm.get('role');
  }

  get email() {
    return this.addNewUserForm.get('email');
  }

  get password() {
    return this.addNewUserForm.get('password');
  }

  get confirmPassword() {
    return this.addNewUserForm.get('confirmPassword');
  }

  onUserFormSubmit() {
    let postData: any = {
      Title: this.addNewUserForm.get('title')?.value,
      FirstName: this.addNewUserForm.get('firstName')?.value,
      LastName: this.addNewUserForm.get('lastName')?.value,
      Role: this.addNewUserForm.get('role')?.value,
      Email: this.addNewUserForm.get('email')?.value,
      Password: this.addNewUserForm.get('password')?.value,
      ConfirmPassword: this.addNewUserForm.get('confirmPassword')?.value,
    };
    // console.log(postData);
    this.userService.createUser(postData).subscribe((data) => {
      // console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      if (data != null && data > 0) {
        this.event.emit('OK');
      }
    });
    this.onClose();
    window.location.reload();
  }

  onClose() {
    this.bsModalRef.hide();
  }

  onUserEditFormSubmit() {
    let postData: any = {
      Id: this.userId,
      Title: this.addNewUserForm.get('title')?.value,
      FirstName: this.addNewUserForm.get('firstName')?.value,
      LastName: this.addNewUserForm.get('lastName')?.value,
      Role: this.addNewUserForm.get('role')?.value,
      Email: this.addNewUserForm.get('email')?.value,
      Password: this.addNewUserForm.get('password')?.value,
      ConfirmPassword: this.addNewUserForm.get('confirmPassword')?.value,
    };

    this.userService.updateUser(postData, this.userId).subscribe((data) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      this.event.emit('OK');
    });
    this.onClose();
  }

  setDataUser() {
    this.userService.userIdData.subscribe((data: any) => {
      this.userId = data;
      console.log('id update => ', this.userId);
      if (this.userId !== undefined) {
        this.userService.getUserById(this.userId).subscribe(
          (data) => {
            this.postData = data;

            if (this.addNewUserForm != null && this.postData != null) {
              this.addNewUserForm.controls['title'].setValue(
                this.postData.title
              );
              this.addNewUserForm.controls['firstName'].setValue(
                this.postData.firstName
              );
              this.addNewUserForm.controls['lastName'].setValue(
                this.postData.lastName
              );
              this.addNewUserForm.controls['role'].setValue(this.postData.role);
              this.addNewUserForm.controls['email'].setValue(
                this.postData.email
              );
              this.addNewUserForm.controls['password'].setValue(
                this.postData.password
              );
              this.addNewUserForm.controls['confirmPassword'].setValue(
                this.postData.confirmPassword
              );
            }
          },
          (error) => {
            console.log('Error while getting post details');
          }
        );
      }
    });
  }
}
