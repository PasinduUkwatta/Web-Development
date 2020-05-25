import { Component } from '@angular/core';
import {count} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state = true;
  counter = [];


  toggleDisplay() {
    this.state = !this.state;
    this.counter.push(this.counter.length + 1);
  }

  getLenght() {
    if(this.counter.length>4){
      return 'blue';

    }else {
      return 'black';
    }
  }
}
