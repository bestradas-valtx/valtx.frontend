import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SeguridadModule } from './features/modules/seguridad/seguridad.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutModule } from './features/layout/layout.module';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { NotFoundComponent } from './features/components/not-found/not-found.component';
import { PasswordRecoverComponent } from './features/components/password-recover/password-recover.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        PasswordRecoverComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        CoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        SeguridadModule,
        LayoutModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
