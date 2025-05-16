import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-empresa-seleccionar',
    templateUrl: './empresa-seleccionar.component.html',
    styleUrls: ['./empresa-seleccionar.component.scss']
})
export class EmpresaSeleccionarComponent {
    
    empresas = [
        { name: 'Empresa Uno', id: 1 },
        { name: 'Empresa Dos', id: 2 },
        { name: 'Empresa Tres', id: 3 }
    ];

    empresaSeleccionada: any = null;

    constructor(public ref: DynamicDialogRef) {}

    ngOnInit(): void {}

    seleccionarEmpresa() {
        if (this.empresaSeleccionada) {
            localStorage.setItem('empresaId', this.empresaSeleccionada.id);
            this.ref.close(this.empresaSeleccionada);
        }
    }

    cancelar() {
        this.ref.close(null);
    }
}
