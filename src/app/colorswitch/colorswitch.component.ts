import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorswitch',
  templateUrl: './colorswitch.component.html',
  styleUrls: ['./colorswitch.component.css']
})
export class ColorswitchComponent implements OnInit {

  isOn = false;
  color = "Light";

  // clicked() {
  //   this.isOn = !this.isOn;
  // }

  clicked() {
    this.isOn = !this.isOn;
    this.color = this.isOn ? "Light" : "Dark";
  }

 get message() {
    return `The color is ${this.isOn ? 'Light' : 'Dark'}`;
  }

  constructor() { }

  ngOnInit(): void {
    //this.messages = "ty";
  }

}
