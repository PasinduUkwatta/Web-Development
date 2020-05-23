import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName ='Applo';
  ServerStatues='offline';
  ServerId =11;
  statuesFlag = false;
  buttonState = true;


  //this is the constructor for putting the button in active for 5 secs.
  title: Function;
  constructor() {
    setTimeout(()=> {
      this.buttonState = false;

    },5000)


  }

  toggleServerStatues(){
    this.statuesFlag=!this.statuesFlag;
    if(this.statuesFlag ===true){

      this.ServerStatues ='online';
    }
    else {
      this.ServerStatues = 'offline';
    }

    return this.ServerStatues;
  }
}
