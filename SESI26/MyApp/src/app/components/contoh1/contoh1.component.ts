import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contoh1',
  templateUrl: './contoh1.component.html',
  styleUrls: ['./contoh1.component.css']
})
export class Contoh1Component implements OnInit {
  title="Ini adalah contoh1 component"

  constructor() { }

  ngOnInit(): void {
  }

}
