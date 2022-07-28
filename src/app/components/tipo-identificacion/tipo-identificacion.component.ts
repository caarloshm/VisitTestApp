import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IdentificacionComponent } from 'src/app/dialogs/identificacion/identificacion.component';

@Component({
  selector: 'app-tipo-identificacion',
  templateUrl: './tipo-identificacion.component.html',
  styleUrls: ['./tipo-identificacion.component.css']
})
export class TipoIdentificacionComponent implements OnInit {

  displayedColumns: string[] = ['typeId'];
  dataSource = new MatTableDataSource<listTypeId>(ELEMENT_DATA);

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
  
    const dialogRef = this.dialog.open( IdentificacionComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }

  ngOnInit(): void {
  }

}
export interface listTypeId {
  typeId  : string;
}

const ELEMENT_DATA: listTypeId[] = [
  {typeId: 'Lithium'},
  {typeId: 'Beryllium'},
  {typeId: 'Boron'},
  {typeId: 'Carbon'},
  {typeId: 'Nitrogen'},
  {typeId: 'Oxygen'},
  {typeId: 'Fluorine'},
  {typeId: 'Neon'},

]

