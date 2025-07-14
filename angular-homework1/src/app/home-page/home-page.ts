import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { Contents } from "../components/contents/contents";

@Component({
  selector: 'app-home-page',
  imports: [Header, Contents],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
