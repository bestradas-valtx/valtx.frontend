import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    jwtHelper = new JwtHelperService();
    userEmail: string = '';
    userFullName: string = '';
    
    items!: MenuItem[];
    subscription!: Subscription;

    constructor(
        //private productService: ProductService,
        private utilService: UtilService,
    ) { }

    ngOnInit() {

        const userdata =  this.utilService.getItemStorage('userdata');
        if(userdata){
            if (Object.keys(userdata).length > 0) {
                this.userFullName = `${userdata.vnombres|| ''} ${userdata.vapellido_paterno|| ''} ${userdata.vapellido_materno|| ''}`;
            }
        }  
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
