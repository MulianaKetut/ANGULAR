import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  tasks: Task[] = [];
  categories = ['School', 'Work', 'Hobby'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    //ambil value input berdasarkan name
    const { taskName, category } = form.value;

    //add data task
    // this.tasks = [...this.tasks, new Task(taskName, false, category)];

    //add data task with push
    this.tasks.push(new Task(taskName, false, category));

    console.log(this.tasks);
    form.reset();
  }
}
