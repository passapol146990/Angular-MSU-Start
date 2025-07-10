import { Component, output } from '@angular/core';
import { signal,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe } from '@angular/common';
import { Header } from "./header/header";
import { Item } from "./item/item";
import { Addform } from './addform/addform';

export interface Employee{
  name:string;
  salary:number;
}

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    Header,
    Item,
    Addform
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "passapol sutatam";
  address = "msu university";
  birthday = "06-06-2004";

  age = ()=>{
    return new Date().getFullYear() - new Date(this.birthday).getFullYear();
  }

  image = "https://cdn.pixabay.com/photo/2023/12/26/11/46/cake-8470012_1280.jpg";
  width = 250;
  height = 250;
  
  ShowAlert(){
    alert("สวัดดีครับ");
  };

  countclick = 0;
  AddNumber(){
    this.countclick++;
  };

  username = "admin";

  isLogin = true;
  Login(){
    this.isLogin = true;
  };
  Logout(){
    this.isLogin = false;
  };

  employee:Employee[] = [
    {
      name:"passapol",
      salary:50000,
    },
    {
      name:"sutatam",
      salary:35000,
    },
    {
      name:"npmrundev",
      salary:25000,
    },
  ];

  inSertEmployee(emp:Employee){
    this.employee.push(emp);
  }

  removeDataById(id:number){
    // this.employee.filter((emp)=>emp.id !== id);
    this.employee = [...this.employee.slice(0,id),...this.employee.slice(id+1,this.employee.length)]
  }

  clearEmployee(){
    this.employee = []
  };

  isMode = false;
  changeMode(){
    this.isMode = !this.isMode;
  };

  color = "green"
  background = "black"

  myStype = {
    'padding':'5px 200px',
    'background':'red',
    'color':'white'
  };

  fname = signal<string>("passapol");
  lname = signal<string>("sutatam");
  exp = signal<number>(3);
  skills = signal<string[]>([
    "NodeJS","CSS","HTML"
  ]);

  changeName(){
    this.fname.set('a');
    this.lname.set("b");
  };

  addExp(){
    this.exp.set(this.exp()+1);
  };
  // เปลี่ยนค่าไม่ได้
  fullName = computed(()=>{
    return this.fname() + ' ' + this.lname();
  });
  dubbleExp = computed(()=>this.exp()*2);


  headerLink = [
    {
      title:"home",
      url:"/"
    },
    {
      title:"about",
      url:"/about"
    }
  ];
}
