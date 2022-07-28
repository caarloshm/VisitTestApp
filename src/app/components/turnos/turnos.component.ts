import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TurnoComponent } from 'src/app/dialogs/turno/turno.component';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements AfterViewInit {

  displayedColumns: string[] = ['turno','time'];
  dataSource = new MatTableDataSource<listTurn>(ELEMENT_DATA)
  
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
  
    const dialogRef = this.dialog.open( TurnoComponent , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }
  ngOnInit(): void {
  }

}

export interface listTurn {
  turno : string;
  time : string;
}

const ELEMENT_DATA: listTurn[] = [
  {time: '06:00 - 14:00', turno: 'Turno 1'},
  {time: '14:00 - 22:00', turno: 'Turno 2'},
  {time: '22:00 - 06:00', turno: 'Turno 3'},


]
