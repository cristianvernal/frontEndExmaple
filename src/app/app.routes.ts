// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component')
            },
            {
                path: 'usuario',
                loadComponent: () => import('./business/usuario/usuario.component')
            },
            {
                path: 'reportes',
                loadComponent: () => import('./business/reportes/reportes.component')
            },
            {
                path: 'login',
                loadComponent: () => import('./business/login/login.component')
            },
            {
                path: 'crear-faena', // Ruta para crear una faena
                loadComponent: () => import('./shared/components/crear-faena/crear-faena.component')
            },
            {
                path: 'agregar-trabajador', // Nueva ruta para agregar trabajador
                loadComponent: () => import('./shared/components/agregar-trabajador/agregar-trabajador.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
