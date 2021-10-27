import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noRouting-app';
  btnAddName = 'Add Counter';
  btnSubstractName = 'Substract Counter';
  btnResetName = 'Reset Counter';
  counter = 0;
  items: string[] = [];
  currentItem = '';
  fontSizePx = 16;
  messages: string[] = ['i can see you', 'now you see me', 'now you dont'];

  people: any[] = [
    {
      name: 'Douglas Pace',
      age: '18',
      country: 'USA',
    },
    {
      name: 'Douglas Pace',
      age: '18',
      country: 'HK',
    },
    {
      name: 'Douglas Pace',
      age: '18',
      country: 'MARS',
    },
    {
      name: 'Douglas Pace',
      age: '18',
      country: 'UK',
    },
  ];

  currentDate = new Date();

  addItem(newItem: string) {
    this.currentItem = newItem;
    this.items.push(newItem);
  }

  addCounter() {
    return this.counter++;
  }

  subtractCounter() {
    if (this.counter == 0) {
      return (this.counter = 0);
    }
    return this.counter--;
  }

  resetCounter() {
    return (this.counter = 0);
  }

  // modifyCounter(op: string) {
  //   if (op === '+') {
  //     return this.counter++;
  //   } else if (op === '-') {
  //     return this.counter--;
  //   } else {
  //     return (this.counter = 0);
  //   }
  // }
}
