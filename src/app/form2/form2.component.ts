import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  fname= '';
  tel: '';
  pass: '';
  formState = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetDetails(){
    this.fname = '';
    this.pass = '';
    this.tel = '';
  }

  checkDetails(){
    if((this.fname==='')||(this.tel=='')||(this.pass==='')){
      this.formState =true;
      return this.formState;
    }

  }

}
