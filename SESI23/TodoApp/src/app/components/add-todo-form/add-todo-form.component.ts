import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    const todo: Todo = {
      content: this.inputTodo,
      completed: false,
    };

    if (this.inputTodo == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, Enter todo!',
      });
    } else {
      this.newTodoEvent.emit(todo);
      this.inputTodo = '';
    }
  }
}
