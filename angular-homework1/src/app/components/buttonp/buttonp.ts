import {Component, EventEmitter, input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-buttonp',
  imports: [MatButtonModule],
  templateUrl: './buttonp.html',
  styleUrl: './buttonp.css'
})
export class Buttonp {
  title = input<string>("buttonp1");
  // @Output() onAction = new EventEmitter<any>();

  onClick(){
    // this.onAction.emit();
  }
}
