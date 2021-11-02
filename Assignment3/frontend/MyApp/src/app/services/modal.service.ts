import { Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef?: BsModalRef
  user?:User

  constructor() { }
}
