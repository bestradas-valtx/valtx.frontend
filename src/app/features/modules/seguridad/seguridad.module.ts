import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { EmpresaSeleccionarComponent } from './login/dialogs/empresa-seleccionar/empresa-seleccionar.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        EmpresaSeleccionarComponent
    ],
    imports: [
        CommonModule,
        SeguridadRoutingModule,
        FormsModule,
        SharedModule
    ],
})
export class SeguridadModule { }
