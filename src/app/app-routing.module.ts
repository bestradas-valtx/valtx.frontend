import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { UserLoggedGuard } from './core/guards/user-logged.guard';
import { IntentoLoginGuard } from './core/guards/intento-login.guard';
import { LoginComponent } from './features/modules/seguridad/login/login.component';
import { NotFoundComponent } from './features/components/not-found/not-found.component';
import { PasswordRecoverComponent } from './features/components/password-recover/password-recover.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'inicio'
        ,component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home'
                ,loadChildren: () => import('./features/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
                // ,canActivate: [ UserLoggedGuard ]
            },
        ],
    },
//     {
//         path: '', component: AppLayoutComponent,
//         children: [
//             {
//                 path: 'administracion'
//                 ,loadChildren: () => import('./views/administracion/administracion.module').then(m => m.AdministracionModule)
//                 ,canActivate: [UserLoggedGuard]
//             },
//         ]
//     },
//     {
//         path: '', component: AppLayoutComponent,
//         children: [
//             {
//                 path: 'maestras'
//                 ,loadChildren: () => import('./views/maestras/maestras.module').then(m => m.MaestrasModule)
//                 ,canActivate: [UserLoggedGuard]
//             },
//         ]
//     },
//     {
//         path: '', component: AppLayoutComponent,
//         children: [
//             {
//                 path: 'reportes'
//                 ,loadChildren: () => import('./views/reportes/reportes.module').then(m => m.ReportesModule)
//                 ,canActivate: [UserLoggedGuard]
//             },
//         ]
//     },
//     {
//         path: '', component: AppLayoutComponent,
//         children: [
//             {
//                 path: 'gestion'
//                 ,loadChildren: () => import('./views/gestion/gestion.module').then(m => m.GestionModule)
//                 ,canActivate: [ UserLoggedGuard ]
//             },
//         ]
//     },
//     {
//         path: '', component: AppLayoutComponent,
//         children: [
//             {
//                 path: 'datos-proveedor'
//                 ,loadChildren: () => import('./views/HomologacionProveedores/homologacion-proveedores.module').then(m => m.HomologacionProveedoresModule)
//                 ,canActivate: [UserLoggedGuard]
//             },
//             {
//                 path: 'proveedor-ssoma'
//                 ,loadChildren: () => import('./views/HomologacionProveedores/proveedor-ssoma/proveedor-ssoma.module').then(m => m.ProveedorSsomaModule)
//                 ,canActivate: [UserLoggedGuard]
//             },
//         ]
//     },


    {
        path: 'auth',
        loadChildren: () => import('./features/modules/seguridad/seguridad.module').then(m => m.SeguridadModule)
    },
    { path: 'pages/notfound', component: NotFoundComponent },
    { path: 'recuperar-clave', component: PasswordRecoverComponent },
    { path: 'login', component: LoginComponent /*, canActivate: [ IntentoLoginGuard ]*/ },
    { path: '**', redirectTo: 'pages/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
