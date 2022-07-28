
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { TerminalesComponent } from './dialogs/terminales/terminales.component';
import { EmpresaComponent } from './dialogs/empresa/empresa.component';
import { IdentificacionComponent } from './dialogs/identificacion/identificacion.component';
import { UsuarioComponent } from './dialogs/usuario/usuario.component';
import { VisitanteComponent } from './dialogs/visitante/visitante.component';
import { TurnoComponent } from './dialogs/turno/turno.component';
import { NewRegisterComponent } from './dialogs/new-register/new-register.component';
import { NuevoUsuarioComponent } from './dialogs/nuevo-usuario/nuevo-usuario.component';
// import { BitacoraComponent } from './components/bitacora/bitacora.component';
// import { TerminalComponent } from './components/terminal/terminal.component';
// import { TipoUsuariosComponent } from './components/tipo-usuarios/tipo-usuarios.component';
// import { TurnosComponent } from './components/turnos/turnos.component';
// import { UsuariosComponent } from './components/usuarios/usuarios.component';
// import { EmpresasComponent } from './components/empresas/empresas.component';
// import { TipoIdentificacionComponent } from './components/tipo-identificacion/tipo-identificacion.component';
// import { TipoVisitanteComponent } from './components/tipo-visitante/tipo-visitante.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    TerminalesComponent,
    EmpresaComponent,
    IdentificacionComponent,
    UsuarioComponent,
    VisitanteComponent,
    TurnoComponent,
    NewRegisterComponent,
    NuevoUsuarioComponent
    // BitacoraComponent,
    // TerminalComponent,
    // TipoUsuariosComponent,
    // TurnosComponent,
    // UsuariosComponent,
    // EmpresasComponent,
    // TipoIdentificacionComponent,
    // TipoVisitanteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
