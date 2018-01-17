import { WelcomeComponent } from './home/welcome.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
