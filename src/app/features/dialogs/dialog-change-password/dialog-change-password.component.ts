import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { StateService } from 'src/app/core/services/state.service';
import * as sha512 from 'js-sha512';

@Component({
    selector: 'app-dialog-change-password',
    templateUrl: './dialog-change-password.component.html',
    styleUrls: ['./dialog-change-password.component.scss']
})
export class DialogChangePasswordComponent {

    value: string="";
    visible: boolean = false;
    usuario!: any;

    constructor(
        private httpCoreService: HttpCoreService,
        private confirmationService: ConfirmationService,   
        private messageService: MessageService,
        private state: StateService,
        private commonService: CommonService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.usuario = this.state.getUsuarioSession();
        if(this.usuario){
            this.visible = this.usuario.flg_isnuevo ? true :false;
        } else{
            this.visible = false;
        }
    }

    isUserNew(){
        if(this.usuario.flg_isnuevo){
            this.visible = true;
        }
    }

    changePassword(){
        if(this.value != ""){
            let req ={
                usuario:this.usuario.vnro_documento,
                password: sha512.sha512(this.value).toString().toUpperCase(),
                flg_nuevo:false//para que no le solicite cambiar la contraseña cuando ingrese nuevamente al sistema
            }
            this.httpCoreService.post(req,'/seguridad/setUsuarioChangePassword').subscribe(res=> {
                if(res.IsSuccess){
                    this.commonService.HanddleInfoMessage("Contraseña Actualizada.");
                    localStorage.clear();
                    sessionStorage.clear();
                    this.router.navigate(['/login']);
                }
            })
        }
        else{
            this.commonService.HanddleErrorMessage2("Ingrese la nueva Contraseña");
        }      
    }

}
