import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCoreService } from './services/httpCore.service';
import { UtilService } from './services/util.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        HttpCoreService,
        UtilService,
        MessageService,
        DialogService
    ],
})
export class CoreModule { }
