import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioComponent } from 'src/app/dialogs/usuario/usuario.component';

@Component({
  selector: 'app-tipo-usuarios',
  templateUrl: './tipo-usuarios.component.html',
  styleUrls: ['./tipo-usuarios.component.css']
})
export class TipoUsuariosComponent implements AfterViewInit {

  displayedColumns: string[] = ['usertype'];
  dataSource = new MatTableDataSource<listUser>(ELEMENT_DATA)
  
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
  
    const dialogRef = this.dialog.open( UsuarioComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }

  ngOnInit(): void {
  }

}
export interface listUser {
  usertype : string;

}

const ELEMENT_DATA: listUser[] = [
  {usertype: 'Admin'},
  {usertype: 'Guardia'},
  {usertype: 'Sistemas'},

]
