import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  editTodo = -1;
  updateText: string | undefined = '';

  constructor() {}

  ngOnInit(): void {}

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      // console.log(v);
      return v;
    });
  }

  deleteTodo(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos.splice(id, 1);
        Swal.fire('Deleted!', 'Your todo has been deleted.', 'success');
      }
    });
    // this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(todo: Todo) {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your Todo has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    this.todos.push(todo);
  }

  updateTodo(id: number) {
    this.editTodo = id;
    this.updateText = this.todos.find((v, i) => i == id)?.content;
  }

  saveUpdate(){
    this.todos[this.editTodo].content = this.updateText
    this.editTodo = -1
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your Todo has been updated',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
