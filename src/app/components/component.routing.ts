import { Routes } from "@angular/router";

import { BitacoraComponent } from './bitacora/bitacora.component';
import { TerminalComponent } from "./terminal/terminal.component";
import { TipoVisitanteComponent } from './tipo-visitante/tipo-visitante.component';
import { TipoIdentificacionComponent } from './tipo-identificacion/tipo-identificacion.component';
import { TipoUsuariosComponent } from './tipo-usuarios/tipo-usuarios.component'
import { TurnosComponent } from './turnos/turnos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from "./login/login.component";


export const ComponentsRoutes: Routes = [

    {
        path: 'bitacora',
        component: BitacoraComponent
      },
      {
        path: 'terminales',
        component: TerminalComponent
      },
      {
        path: 'tiposUsuarios',
        component: TipoUsuariosComponent
      },
      {
        path: 'turnos',
        component: TurnosComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'empresas',
        component: EmpresasComponent
      },
      {
        path: 'tipoIdentificacion',
        component: TipoIdentificacionComponent
      },
      {
        path: 'tipoVisitante',
        component: TipoVisitanteComponent
      },
      {
        path: 'login',
        component:  LoginComponent
      }

];