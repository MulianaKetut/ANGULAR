import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo-reactive-form',
  templateUrl: './add-todo-reactive-form.component.html',
  styleUrls: ['./add-todo-reactive-form.component.css'],
})
export class AddTodoReactiveFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  // todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  todoForm = new FormGroup({
    todo: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get todo() {
    return this.todoForm.get('todo');
  }

  addTodo() {
    // console.log(this.todo);
    // console.log(this.todoForm.value.todo);
    const todo: Todo = {
      content: this.todoForm.value.todo,
      completed: false,
    };

    if (this.todoForm.value.todo == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please, Enter todo!',
      });
    } else {
      this.newTodoEvent.emit(todo);
      // this.todos.push(todo);
      this.todoForm.reset();
    }
  }
}
