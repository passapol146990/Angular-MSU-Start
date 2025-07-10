import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../app';

@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css'
})

export class Addform {
    fullname = signal<string>('admin');
    salary = signal<number>(15000);

    onSubmit = output<Employee>();

    SubmitForm(){
      let emp:Employee={
        name:this.fullname(),
        salary:this.salary()
      }
      this.onSubmit.emit(emp);
      this.fullname.set('');
      this.salary.set(15000);
    }
}
