import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VisitanteComponent } from 'src/app/dialogs/visitante/visitante.component';

@Component({
  selector: 'app-tipo-visitante',
  templateUrl: './tipo-visitante.component.html',
  styleUrls: ['./tipo-visitante.component.css']
})
export class TipoVisitanteComponent implements AfterViewInit {

  displayedColumns: string[] = ['name','color'];
  dataSource = new MatTableDataSource<listVisit>(ELEMENT_DATA)
  
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
  
    const dialogRef = this.dialog.open( VisitanteComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }

  ngOnInit(): void {
  }

}

export interface listVisit {
  name : string;
  color : string;
}

const ELEMENT_DATA: listVisit[] = [
  {color: "red", name: 'Hydrogen'},
  {color: "blue", name: 'Helium'},
  {color: "green", name: 'Lithium'},
  {color: "Yellow", name: 'Beryllium'},


]
