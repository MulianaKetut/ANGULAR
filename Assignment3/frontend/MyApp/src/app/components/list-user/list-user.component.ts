import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  bsModalRef?: BsModalRef;

  constructor(
    private userService: UserService,
    private bsModalService: BsModalService
  ) {
    this.getAllUser();
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addNewUser() {
    this.bsModalRef = this.bsModalService.show(UserComponent);
    this.bsModalRef.content.event.subscribe((result: any) => {
      if (result == 'OK') {
        this.getAllUser();
      }
    });
  }

  deleteUser(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe((res) => {
          // console.log(res);
          this.getAllUser();
          Swal.fire('Deleted!', res.message, 'success');
        });
      }
    });
  }

  updateUser(id: number) {
    // let user: User = this.users.find((x) => x.id == id)!;
    // console.log(user);
    // this.userService.updateUser(user, id);

    this.userService.changeUserId(id);
    this.bsModalRef = this.bsModalService.show(UpdateUserComponent);
    this.bsModalRef.content.event.subscribe((result: any) => {
      console.log('DATA RESULT', result);
      if (result == 'OK') {
        setTimeout(() => {
          this.getAllUser();
        }, 5000);
      }
    });
  }
}
