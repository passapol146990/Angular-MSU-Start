import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { ProgressSpinner } from "../components/progress-spinner/progress-spinner";

@Component({
  selector: 'app-login-page',
  imports: [Header, ProgressSpinner],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

}
