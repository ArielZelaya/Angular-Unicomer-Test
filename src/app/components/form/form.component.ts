import { Component, OnInit , ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table'; 
interface Gender {
  value: string;
  viewValue: string;
}
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

  customerArray: customer[] = [
    {id:0,fname:'Ariel', lname:'Zelaya',bday:'1/1/1994',gender:'Male',cellphone:'6129-7481',homephone:'2294-2917',address:'Calle El Guaje pol D',profession:'Developer',income: 1000},
    {id:1,fname:'Emerson', lname:'Zelaya',bday:'18/1/1994',gender:'Male',cellphone:'6129-7482',homephone:'2294-2918',address:'Calle El Guaje pol E',profession:'Translator',income: 1600}
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  genders: Gender[] = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
  ];
  displayedColumns: string[] = ['Id','First Name', 'Last Name', 'BirthDay', 'Gender','Cellphone','Homephone','Address','Profession','Income'];
  dataSource = this.customerArray;
  constructor() { }

  selectedCustomer: customer = new customer();


  ngOnInit(): void {
  }

  addCustomer(){
    console.log('Inicio')
    this.selectedCustomer.id = this.customerArray.length + 1;
    this.customerArray.push(this.selectedCustomer);
    this.table.renderRows();
  }



}
