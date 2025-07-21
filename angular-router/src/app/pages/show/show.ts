import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  imports: [CommonModule],
  templateUrl: './show.html',
  styleUrl: './show.scss'
})
export class Show {
  id = '';

  constructor(private activeatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.activeatedRoute.snapshot.paramMap.get("id") || "";
  }
}
