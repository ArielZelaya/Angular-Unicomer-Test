import { Component, OnInit , ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table'; 
import * as _moment from 'moment';

const moment = _moment;
//Interface for Gender input
interface Gender {
  value: string;
  viewValue: string;
}

//Customer Class for Array
export class customer {
  id:number =0
  fname: string = '';
  lname: any;  
  bday: any;
  gender:any;
  cellphone:any;
  homephone:any;
  address:any;
  profession:any;
  income:any
 
}

 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
//Customer Array init
  customerArray: customer[] = [
    {id:0,fname:'Ariel', lname:'Zelaya',bday:'1/1/1994',gender:'Male',cellphone:'6129-7481',homephone:'2294-2917',address:'Calle El Guaje pol D',profession:'Developer',income: 1000},
    {id:1,fname:'Emerson', lname:'Zelaya',bday:'18/1/1994',gender:'Male',cellphone:'6129-7482',homephone:'2294-2918',address:'Calle El Guaje pol E',profession:'Translator',income: 1600}
  ];

  //table instance
  @ViewChild(MatTable) table: MatTable<any>;

  //Date moment for date formating
  date = moment();

  //gender array
  genders: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];

  //Table Columns
  displayedColumns: string[] = ['First Name', 'Last Name', 'BirthDay', 'Gender','Cellphone','Homephone','Address','Profession','Income'];
  //Data source
  dataSource = this.customerArray;
  
  constructor() { }
  //New Customer binding
  selectedCustomer: customer = new customer();


  ngOnInit(): void {
  }
  //New customer function
  addCustomer(){

    if(this.selectedCustomer.fname != ""){//Really basic validation
      this.selectedCustomer.id = this.customerArray.length + 1;
      this.date = moment(this.selectedCustomer.bday)
      this.selectedCustomer.bday = this.date.format('M/D/YYYY') //date format
      this.customerArray.push(this.selectedCustomer);
      this.table.renderRows();//Updates table rows
      this.selectedCustomer = new customer(); //Clears forms inputs
    }
    
  }



}
