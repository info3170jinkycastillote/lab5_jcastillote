import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorswitch',
  templateUrl: './colorswitch.component.html',
  styleUrls: ['./colorswitch.component.css']
})
export class ColorswitchComponent implements OnInit {

  isOn = false;
  
  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
