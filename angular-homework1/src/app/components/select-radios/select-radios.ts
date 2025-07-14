import { Component, EventEmitter, Output } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-select-radios',
  imports: [MatRadioModule],
  templateUrl: './select-radios.html',
  styleUrl: './select-radios.css'
})
export class SelectRadios {
  @Output() onSelect = new EventEmitter<string>();
  
  select(x:string){
    this.onSelect.emit(x);
  }
}
