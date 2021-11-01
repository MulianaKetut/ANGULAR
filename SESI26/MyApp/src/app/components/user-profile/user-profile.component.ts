import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  currentUser: {
    name: string;
    email: string;
    _id: number;
  } = { name: '', email: '', _id: 0 };

  constructor(
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    if (!this.authService.currentUser._id) {
      this.authService.getUserProfile(id).subscribe((res) => {
        this.currentUser = res.msg;
      });
    } else {
      const { name, email, _id } = this.authService.currentUser;
      this.currentUser = { name, email, _id };
    }
  }
}
