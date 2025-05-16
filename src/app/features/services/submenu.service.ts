import { Injectable } from '@angular/core';
// import { ApiCoreService } from 'src/app/core/services/api-core.service';

@Injectable({
    providedIn: 'root'
})
export class SubmenuService {

    menux: any = {}
    constructor(
        // private apicore: ApiCoreService
    ) {
        //this.buildMenu()
    }

    // getMenu() {
    //   //return this.apicore.get<any>(Endpoints.GET_SUBMENU + `/${idPerfi}/${idModulo}`).pipe();
    // }


    sortMenu(items: any[] = []) {
        return items.sort(function (a, b) {
            return (b.iid_modulo - a.iid_modulo)
        })
    }

}
