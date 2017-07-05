import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { StudentComponent } from 'app/component/student-component/student.component';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
