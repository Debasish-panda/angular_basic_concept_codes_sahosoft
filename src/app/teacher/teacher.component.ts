import { ChangeDetectorRef, Component, ContentChild, OnInit, ViewChild, } from '@angular/core';
import { ServiceService } from '../service.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  // providers: [ServiceService]

})


export class TeacherComponent implements OnInit {
  // @ContentChild(StudentComponent) studentcomponent!: StudentComponent;
  // @ContentChild(StudentComponent, {static:true}) studentcomponent!: StudentComponent;
  // @ViewChild(StudentComponent) studentcomponent!: StudentComponent;

  // constructor(private _serviceService:ServiceService) { }

  // servicevalue:any;
  ngOnInit(): void {
    //   this.servicevalue=this._serviceService.arrshowdata();
    // }
    // addval(val:any){
    //   this._serviceService.arrpushdata(val);
    //   this.servicevalue=this._serviceService.arrshowdata();
    // this.studentcomponent.name = "mama debata";
  }

  // ngAfterContentInit() {
  //   console.log('parent ngaftercontentInit called');
  //   // this.studentcomponent.name = "mama debata";
  //   console.log(this.studentcomponent.addition(10,20));
  // }
  // ngAfterContentChecked(){
  //   console.log('parent ngaftercontentcheckd working, which call everytime');
  // }

  // constructor(private cd: ChangeDetectorRef) {  }

  // ngAfterViewInit() {
  //   console.log('parent ngaftercontentInit called');
  //   this.studentcomponent.name = "mama debata";
  //   console.log(this.studentcomponent.addition(10, 20));
  //   this.cd.detectChanges();
  // }
  // @ContentChild(StudentComponent) _studentcomponent !: StudentComponent;

  //   ngAfterContentInit(){
  //     this._studentcomponent.fullname="mama debata";
  //   }
  //   ngAfterContentChecked(){
  //     console.log("ngAfterContentChecked called");
  //   }
  // constructor(private cdd:ChangeDetectorRef){}

  // @ViewChild(StudentComponent) _student !:StudentComponent;
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit called");
  //   this._student.fullname="debupanda";
  //   this.cdd.detectChanges();
  // }

  // ngAfterViewChecked(){
  //   console.log('AfterViewChecked called');
  //   this._student.fullname="dev";
  //   this.cdd.detectChanges();
  // }
}
