import { Routes } from '@angular/router';
import { AppPublicComponent } from './app-public/app-public.component';
import { HomeComponent } from './app-public/views/home/home.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { DashboardComponent } from './app-admin/views/dashboard/dashboard.component';

export const routes: Routes = [
    // Rotas publicas do app
    {path: '', component: AppPublicComponent,
        children: [
            {path: '', component: HomeComponent}
        ]
    },

    //Rotas privadas, apenas admin
    {path: 'admin', component: AppAdminComponent, 
        children: [
            {path: '', component: DashboardComponent}
        ]
    },

    // Rotas default
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '**', redirectTo: ''}
];
