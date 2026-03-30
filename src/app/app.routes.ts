import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { adminRoutes } from './admin-layout/admin-routing.module';

export const routes: Routes = [
    {
        path: 'auth',
        component:LayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot',
                component: ForgotPasswordComponent
            }
        ]
    },
    {
        path:'admin',
        component: AdminLayoutComponent,
        children: adminRoutes
    },

    // optional
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    }
];