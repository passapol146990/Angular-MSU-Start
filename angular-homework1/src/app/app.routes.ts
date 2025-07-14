import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { HomePage } from './home-page/home-page';
import { Landmarks } from './landmarks/landmarks';

export const routes: Routes = [
    {path:'', component:HomePage},
    {path:'login', component:LoginPage},
    {path:'landmark', component:Landmarks}
];
