import { Component, OnInit } from '@angular/core';
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Name: '';
  state =false;



  constructor() { }

  ngOnInit(): void {
  }

  //this is the logic for the reset the name in to the blank
  resetName(){

   this.Name = '';
  }

  //this is the logic for the button availability
  checkName() {
    if(this.Name ===''){
      this.state = true;
      return this.state;

    }
  }
}
