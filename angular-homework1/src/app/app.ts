import { Component } from '@angular/core';
// import { Header } from './components/header/header';
// import { Contents } from "./components/contents/contents";
// import { ProgressSpinner } from "./components/progress-spinner/progress-spinner";
// import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
import { RouterOutlet } from '@angular/router';

export interface Data{
  type:string;
  img:string;
  title:string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
