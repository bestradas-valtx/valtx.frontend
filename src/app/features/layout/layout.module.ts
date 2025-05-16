import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { DialogChangePasswordComponent } from '../dialogs/dialog-change-password/dialog-change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        MenuComponent,
        TopBarComponent,
        SideBarComponent,
        FooterComponent,
        DialogChangePasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        SharedModule
    ]
})
export class LayoutModule { }
