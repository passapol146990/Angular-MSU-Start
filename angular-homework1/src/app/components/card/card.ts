import {Component, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
   imports: [MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card{
  img = input<string>();
  title = input<string>();
}
