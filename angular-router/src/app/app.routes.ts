import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { MemberPage } from './pages/member/member';
import { List } from './pages/member/list/list';
import { Profile } from './pages/member/profile/profile';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { Test } from './pages/member/test/test';

export const routes: Routes = [
    {path: '', component: Main},
    {path: 'member', component: MemberPage,
        children:[
            { path:'list', component:List},
            { path:'profile', component:Profile},
            { path:'test/:id', component:Test},
            { path:'test', component:Test}
        ]
    },
    { path:'**', component:Pagenotfound}
];
