import { Component } from '@angular/core';
import { EmpresaSeleccionarComponent } from './dialogs/empresa-seleccionar/empresa-seleccionar.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/core/services/common.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    vpassword!: string;
    isLoading = false;
    ref!: DynamicDialogRef;

    req = {
        vusername: '',
        vpassword: '',
    };

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private commonService: CommonService,
        private utilService: UtilService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        if(!this.authService.estaLogueado()){
            this.abrirDialogBienvenida();
        }
    }

    login() {
        if(this.authService.estaLogueado()){
            this.router.navigate(['/inicio/home']);
            return;
        }
        
        let _req = {
            vusername: this.req.vusername,
            // vpassword: sha512.sha512(this.req.vpassword).toString().toUpperCase(),
            vpassword: this.req.vpassword,
            iid_empresa:localStorage.getItem('empresaId'),
        };

        if (
            !(this.req.vusername == '' || this.req.vusername == undefined)
            && !(this.req.vpassword == '' || this.req.vpassword == undefined)
        ) {
            this.isLoading = true;
            this.authService.logIn(_req).subscribe((res: any) => {
                if (!res.IsSuccess) {
                    this.isLoading = false;
                    this.commonService.HanddleErrorMessage(res);
                } else {
                    //const iid_perfil = this.utilService.getItemStorage('userdata').iid_perfil; //JSON.parse(localStorage.getItem('userdata') || '{}').iid_perfil;

                    const iid_perfil =  this.utilService.getItemStorage('userdata').iid_perfil;
                    const ruta = iid_perfil === 3 ? '/gestion/inicio-proveedor': '/inicio/home';
                    this.router.navigate([ruta]);
                }
            },
                (error: any) => {
                    this.isLoading = false;
                    this.commonService.HanddleErrorMessage2(error);
                }
            );
        } else {
            this.isLoading = false;
            this.commonService.HanddleErrorMessage2('Ingrese Información de Usuario');
        }
    }

    abrirDialogBienvenida() {
        this.ref = this.dialogService.open(EmpresaSeleccionarComponent, {
            width: '400px',
            styleClass: 'p-dialog-no-header',
            closable: false,
            dismissableMask: false,
            contentStyle: { 
                'height': '70vh'
                ,'display': 'flex'
                ,'align-items': 'center'
                ,'justify-content': 'center'
                ,'border-radius': '15px'
            },
            modal: true
        });

        
        // this.ref.onClose.subscribe((result) => {
        //     console.log('Dialog cerrado', result);
        // });
    }

}
