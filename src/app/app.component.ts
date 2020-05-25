import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
studentRoaster = ['pasindu','thiwanka','deshan'];
currentName ='';

add(){
  this.studentRoaster.push(this.currentName);

}
  flag = true;
  toggleFlag(){
    this.flag =!this.flag;
    return this.flag;
  }

  getColor() {

  }


}
