import { Component, OnInit, ViewEncapsulation, EventEmitter, Input } from '@angular/core';
// import { provideRoutes } from '@angular/router';
// import { ServiceService } from '../service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  // encapsulation:ViewEncapsulation.Emulated, // if we will do none then it will take child class css
  // inputs:['pdata', 'getparentdata'], // as a meta data we are using getting data from app component
  // outputs: ['childevent', 'childvaluestorage'],//to out the value which emit by onChange function to parent component we need to use outputs
  // providers: [ServiceService]
})
export class StudentComponent implements OnInit {
  // currval:any;
  // prevval:any;

  // constructor(private _serviceService:ServiceService) { 
  //   console.log('child constructor called');
  //  }

  // pdata:any; //data type is any means string, number anything can receive, with out this will get error
  // childevent=new EventEmitter(); //this created to pass the value of child to parent by emit
  //  @Input() getparentdata:any;
  //  @Input() ngdochange:any = [];
  // @Input() parenttsval:any; //parent ts to child html data transfer
  // servicedata:any;
  //  ngOnInit(): void {
  //  console.log('child oninit called');
  // this.servicedata=this._serviceService.arrshowdata();

  //  }
  //  ngOnChanges(changes:any){
  //    console.log('child ngonchanges called');
  //    for(let propertyName in ch anges){
  //      let change = changes[propertyName];
  //      this.currval=change.currentValue;
  //      this.prevval=change.previousValue;

  //      console.log(propertyName + " | current value is " + this.currval + "| previous value is " + this.prevval);
  //     console.log('for work');
  //  }
  // }

  // onChange(val:any){
  //   this.childevent.emit(val)          //here we have an eventemitter class to create and custome event
  // }


  // childvaluestorage = new EventEmitter();
  // childToparent(childval:any){
  //  this.childvaluestorage.emit(childval);

  // }
  // // ngDoCheck(){
  // //   console.log('ngdocheck execute');
  // // }
  // addval(val:any){
  //  this._serviceService.arrpushdata(val);
  //  this.servicedata=this._serviceService.arrshowdata();
  // }
  // ngOnDestroy(){
  //   console.log("Child ngOnDestroy called");
  // }
  // ngDoCheck(){
  //   console.log('ngdocheck working in child')
  // }

  // @Input() parentonchange:any;

  // ngOnChange(){
  //   console.log('ng on change done in child compoennt');
  // }

  // name:any = "debu panda";

  // addition(a:number, b:number){
  //   return a+b;
  // }
  // change(){
  //   console.log('change done')
  // }

  // ngAfterContentInit(){ //this is not useful in student component
  //   console.log('student ngaftercontentInit called'); 
  //}
  // fullname: any = "";
  // ngOnInit() {
  //   this.fullname = "debasish panda";
  // }
  // change() {
  //   this.fullname = "sushree";
  // }
  ngOnInit() {}

}
