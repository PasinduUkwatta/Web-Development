import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
