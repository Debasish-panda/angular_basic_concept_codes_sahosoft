
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ViewEncapsulation } from '@angular/core';
import { ServiceService } from './service.service';

import { FormControl, FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //preserveWhitespaces: true, // for button it create auto whitespace
  //encapsulation: ViewEncapsulation.None, //we can change accordingly none to emulated, shadowdom
  // inputs: ['parentval']
  // providers: [ServiceService],
})


export class AppComponent {
  title = 'sahosoft';
  // cdata: any;
  // getData(val: any) {
  //   this.cdata = val; //now here the data is in cdata so we will do interpolation 
  // }
  // parentshowdata:any;
  // showchildvalue(val:any){
  //   this.parentshowdata=val;
  // }

  // isvalid = "true";

  // change(val: any) {
  //   this.isvalid = val
  // }

  // emp: any;
  //  gend: any;
  //  display(val: any) {
  //    this.gend = val;
  //  }
  // value = "true";
  // displayComponent(valu: any) {
  //   this.value = valu;
  // }

  // officdata = [
  //   { id: 101, name: 'Debasish' },
  //   { id: 102, name: 'Sushree' },
  //   { id: 103, name: 'Mama' },
  //   { id: 104, name: 'Dev' },
  //   { id: 105, name: 'Debu' }
  // ]


  // _name: Promise<string>;// this will hold the promise return value so we created a variable by _name
  // allemps: Promise<any>;
  // _lifecyclehookconstructor:any;
  // constructor(private _servicename: ServiceService) {
  //   this._name = _servicename.exservice();
  //   this.allemps = _servicename.allemp();
  //   // console.log(document); to check the dom in browser
  //   // console.log(document.body); 
  //   this._lifecyclehookconstructor=_servicename.lifecyclehookconstructor();
  //   console.log(this._lifecyclehookconstructor);

  // }

  // employes = [
  //   { id: 101, name: 'Debasish' },
  //   { id: 102, name: 'Sushree' },
  //   { id: 103, name: 'Mama' },
  //   { id: 104, name: 'Dev' },
  //   { id: 105, name: 'Debu' }
  // ]
  // getallemp() {
  //   this.employes = [
  //     { id: 101, name: 'Debasish' },
  //     { id: 102, name: 'Sushree' },
  //     { id: 103, name: 'Mama' },
  //     { id: 104, name: 'Dev' },
  //     { id: 105, name: 'Debu' },
  //     { id: 106, name: 'panda' }
  //   ]
  // }
  // fntrackby(index: number, employes: any) { //this is define to not load the table again only that updated element will load in this way we can reduce run time
  //   return employes.index;
  // }

  // name = "sush";
  // ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // color = 'green';

  // empls = [
  //   { name: 'debu', country: 'India' },
  //   { name: 'sush', country: 'USA' },
  //   { name: 'mama', country: 'Japan' },
  //   { name: 'dev', country: 'Pak' },
  //   { name: 'panda', country: 'Uk' },
  // ]
  // gcolor(country: any) {
  //   debugger;
  //   switch (country) {
  //     case 'India':
  //       return 'orange';
  //     case 'USA':
  //       return 'blue';
  //     case 'Japan':
  //       return 'red';
  //     case 'Pak':
  //       return 'green';
  //     case 'Uk':
  //       return 'tomato';
  //   }
  //   return null; // if not use we will get error cause we have define the function and it should return something
  // }

  // lname="panda";
  // col=2; //this is used to bind with table colspan by proeprty binding, attr used to inform the dom this is an attribute
  // isbold=false; //true false no need quote.
  // isItalice=true;
  // addStyles():any{
  //   let cssstyle={
  //   'font-weight' : this.isbold ? 'bold' : 'normal',
  //   'font-style' : this.isItalice ? 'italic' : 'normal'
  // }
  // return cssstyle;
  // }

  // text="debu";
  // currentval=false;
  // enbdsb(){
  //   this.currentval=!this.currentval;
  // }

  // sval:any;
  // showvalue(value:any){
  //   this.sval=value;
  // }

  // pipeex="debu";
  // empdtl = [
  //   {name: "debu", id: 12},
  //   {name: "didi", id: 23},
  //   {name: "mama", id: 34},
  //   {name: "panda", id: 45},
  // ]


  // parenttsval:any; //parent ts file to student data transfer
  // ngOnInit(){
  //   this.parenttsval = "Debasish panda";
  // }

  // num1=22;
  // curr = 25;
  // pipename = "debasish";
  // pipestring = "-attribute binding(attribute define by html ) and proeprty binding(property define by dom) after render in broweser same attribute is called property. colspan and rowspan not generate any property so for them only we need to use attribute binding, else always use property binding";

  // ngOnInit(): void {
  //   console.log('parent oninit called')
  // }
  // myArr=['angular1','angular2','angular3']
  // addvalue(){
  //   this.myArr.push('angular4');
  // }

  // datafromservice:any;
  // constructor(private showdata:ServiceService){
  //   this.datafromservice=showdata.onclickdata();
  // }

  // onclickview:any;
  // clicktoview(){
  //   this.onclickview=this.datafromservice;
  // }

// constructor(private router:Router){}
// student(){
//   this.router.navigate(['/student']);
// }

// showhide = true;
// showorhide(){
//   this.showhide = !this.showhide;
// }

// ngOnDestroy(){
//   console.log('App component ngOnDestroy called');
// }
// ngDoCheck(){
//   console.log('ngDoCheck called.');
// }
// ngOnChange(){
//   console.log('ng on change done in app compoennt');
// }

constructor(){} //

//below code for two way data binding
// setmessage:any;
// message='hello world';
// ipdata:any;

// setmsg(val:any){
//   this.message=val;
// }
// displaydata(val:any){
//   this.ipdata=val;
// }




}
