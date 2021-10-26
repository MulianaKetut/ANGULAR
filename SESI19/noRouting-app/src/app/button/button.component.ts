import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() name = '';

  //jika tidak lempar apa2
  @Output() clickEvenHandler = new EventEmitter();

  constructor() {}

  //buat function menghandle event
  onButtonClick() {
    this.clickEvenHandler.emit();
  }

  ngOnInit(): void {}
}
