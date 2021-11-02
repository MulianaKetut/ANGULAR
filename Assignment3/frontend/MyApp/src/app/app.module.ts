import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from './services/user.service';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [AppComponent, UserComponent, ListUserComponent, UpdateUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [UserService, BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
