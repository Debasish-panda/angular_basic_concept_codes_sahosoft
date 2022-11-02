import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(value:  any, ...args: any[]): any { //this line for bold, welcome, reverse pipe
 // transform(value:  any,limit:number= 0, symbol:string="1", ...args: unknown[]): unknown { //doubt why number and string not taking null , this used only for string limit
   // return '<b>' + value + '</b>' ; //ex of bold pipe
   //return "welcome " + value; // ex of welcome pipe

  //  let newstr:string = ""; 
  //  for(let i= value.length; i>=0; i--){ // ex of reverse pipe
  //    newstr += value.charAt(i);
  //  }
  //  return newstr;

  // let newlimit = limit != 0 ? limit: 10;
  // let newsymbol = symbol != "1" ? symbol: '....';
  // return value.length > newlimit ? value.substring(0, newlimit) + newsymbol : value;
  }

}
