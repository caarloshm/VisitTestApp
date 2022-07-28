import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaComponent } from 'src/app/dialogs/empresa/empresa.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})


export class EmpresasComponent implements AfterViewInit {

  displayedColumns: string[] = ['nameCompany','address','phone'];
  dataSource = new MatTableDataSource<listCompany>(ELEMENT_DATA);
  
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
  
    const dialogRef = this.dialog.open( EmpresaComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }
  ngOnInit(): void {
  }

}

export interface listCompany {
  address : string;
  nameCompany : number;
  telefono : number;
}

const ELEMENT_DATA: listCompany[] = [
  {nameCompany: 1, address: 'Hydrogen', telefono: 1.0079},
  {nameCompany: 2, address: 'Helium', telefono: 4.0026},
  {nameCompany: 3, address: 'Lithium', telefono: 6.941},
  {nameCompany: 4, address: 'Beryllium', telefono: 9.0122},
  {nameCompany: 5, address: 'Boron', telefono: 10.811},
  {nameCompany: 6, address: 'Carbon', telefono: 12.0107},
  {nameCompany: 7, address: 'Nitrogen', telefono: 14.0067},
  {nameCompany: 8, address: 'Oxygen', telefono: 15.9994},
  {nameCompany: 9, address: 'Fluorine', telefono: 18.9984},
  {nameCompany: 10, address: 'Neon', telefono: 20.1797},

]
