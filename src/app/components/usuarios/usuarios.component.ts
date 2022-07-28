import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NuevoUsuarioComponent } from 'src/app/dialogs/nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nameUser','terminal','userType'];
  dataSource = new MatTableDataSource<listUser>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog : MatDialog) { }
  openDialog(obj:string): void {
    //this.common.spinner.show();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '90%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.data = obj;
  
    dialogConfig.panelClass = '';
  
    const dialogRef = this.dialog.open( NuevoUsuarioComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }

  ngOnInit(): void {
  }

  

}

export interface listUser {
  nameUser : string;
  terminal : string;
  userType : string;
}

const ELEMENT_DATA: listUser[] = [
  {terminal: 'Rio Bravo', nameUser: 'Carlos Hernandez', userType: 'Admin'},
  {terminal: 'Rio Bravo', nameUser: 'Gerardo Treviño', userType: 'System'},
  {terminal: 'TCA Reynosa', nameUser: 'Jose Reyes', userType: 'Guardia'},
  {terminal: 'Cienega', nameUser: 'Luis Hernandez', userType: 'Syystem'},
  {terminal: 'Pharr', nameUser: 'Jaime Garcia', userType: 'Admin'},


]