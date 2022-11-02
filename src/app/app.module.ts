import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BoldPipe } from './bold.pipe';
//import { ServiceService } from './service.service'; //if we want to use as component level
import{FormsModule} from '@angular/forms'

import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    BoldPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ], //ServiceService
  bootstrap: [AppComponent]
})
export class AppModule { }
