import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TerminalesComponent } from 'src/app/dialogs/terminales/terminales.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  displayedColumns: string[] = ['terminal', 'ciudad', 'estatus'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
  
    const dialogRef = this.dialog.open( TerminalesComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  ciudad : string;
  terminal : number;
  estatus : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {terminal: 1, ciudad: 'Hydrogen', estatus: 1.0079},
  {terminal: 2, ciudad: 'Helium', estatus: 4.0026},
  {terminal: 3, ciudad: 'Lithium', estatus: 6.941},
  {terminal: 4, ciudad: 'Beryllium', estatus: 9.0122},
  {terminal: 5, ciudad: 'Boron', estatus: 10.811},
  {terminal: 6, ciudad: 'Carbon', estatus: 12.0107},
  {terminal: 7, ciudad: 'Nitrogen', estatus: 14.0067},
  {terminal: 8, ciudad: 'Oxygen', estatus: 15.9994},
  {terminal: 9, ciudad: 'Fluorine', estatus: 18.9984},
  {terminal: 10, ciudad: 'Neon', estatus: 20.1797},

];
