import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'bitacora', name: 'Bitacora', type: 'link', icon: 'view_list' },
  { state: 'terminales', type: 'link', name: 'Terminales', icon: 'apartment' },
  { state: 'tiposUsuarios', type: 'link', name: 'Tipos de Usuarios', icon: 'supervisor_account' },
  { state: 'turnos', type: 'link', name: 'Turnos', icon: 'timer' },
  { state: 'usuarios', type: 'link', name: 'Usuarios', icon: 'group' },
  { state: 'empresas', type: 'link', name: 'Empresas', icon: 'store' },
  { state: 'tipoIdentificacion', type: 'link', name: 'Tipo Idenficacion', icon: 'badge' },
  { state: 'tipoVisitante', type: 'link', name: 'Tipo Visitante', icon: 'person' },
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
