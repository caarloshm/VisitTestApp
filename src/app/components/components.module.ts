import 'hammerjs';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentsRoutes } from './component.routing';

import { BitacoraComponent } from './bitacora/bitacora.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TipoIdentificacionComponent } from './tipo-identificacion/tipo-identificacion.component';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component';
import { TipoVisitanteComponent } from './tipo-visitante/tipo-visitante.component';
import { TurnosComponent } from './turnos/turnos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DialogOverviewExampleDialogComponent } from '../material-component/dialog/dialog.component';
import { LoginComponent } from './login/login.component';

@NgModule({

    imports:[
        CommonModule,
        RouterModule.forChild(ComponentsRoutes),
        DemoMaterialModule, 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CdkTableModule
    ],
    providers: [],
    entryComponents: [DialogOverviewExampleDialogComponent],
    declarations: [
        BitacoraComponent,
        EmpresasComponent,
        TerminalComponent,
        TipoIdentificacionComponent,
        TipoUsuariosComponent,
        TipoVisitanteComponent,
        TurnosComponent,
        UsuariosComponent,
        LoginComponent
    ]

})

export class ComponentComponentsModule {}