import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'post-list', component: ListComponent },
    { path: 'post-details/:id', component: PostDetailsComponent },
    { path: 'account', component: AccountComponent },
];
