import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Contents } from "./components/contents/contents";
import { ProgressSpinner } from "./components/progress-spinner/progress-spinner";

export interface Data{
  img:string;
  title:string;
}

@Component({
  selector: 'app-root',
  imports: [Header, Contents, ProgressSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
