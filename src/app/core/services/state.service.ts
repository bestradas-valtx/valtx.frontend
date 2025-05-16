import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    public dataProceso$ = new BehaviorSubject<any>(null);

    public unidadNegocioNombre$ = new BehaviorSubject<any>(null);
    public unidadNegocioID$ = new BehaviorSubject<any>(null);
    public periodoProceso$ = new BehaviorSubject<any>(null);

    public ejecutivo_nombres$ = new BehaviorSubject<string>('');

    public riesgOportunidaUpdate$ = new BehaviorSubject<number>(0);
    public locatioOrCebeUpdate$ = new BehaviorSubject<number>(0);
    public changeTab$ = new BehaviorSubject<number>(0);

    public itemsEtapa$ = new BehaviorSubject<MenuItem[]>([]);

    constructor(
        private utilService :UtilService,
    ) {
        this.getUserLocalStorage();
    }

    private getUserLocalStorage() {
        const user: any = this.utilService.getItemStorage('userdata');
        if(user){
            const nombreCompleto = `${user.vnombres} ${user.vapellido_paterno} ${user.vapellido_materno}`;
            this.ejecutivo_nombres$.next(nombreCompleto);
        }
    }

    public getUsuarioSession() {
        const user = this.utilService.getItemStorage('userdata');
        return user;
    }

}
