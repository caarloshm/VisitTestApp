import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewRegisterComponent } from 'src/app/dialogs/new-register/new-register.component';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements AfterViewInit {

  displayedColumns: string[] = ['name','company','issue','status','id','gafette','laptop','noSerie'];
  dataSource = new MatTableDataSource<listRegisters>(ELEMENT_DATA)
  
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
  
    const dialogRef = this.dialog.open( NewRegisterComponent  , dialogConfig);
  
    //dialogRef.afterClosed().toPromise().then(() => this.updateDataSource());
  }


  ngOnInit(): void {
  }

}

export interface listRegisters {
  name : string;
  company : string;
  issue : string;
  status : string;
  id: string;
  gafette: string;
  laptop: boolean;
  noSerie: string;

}

const ELEMENT_DATA: listRegisters[] = [
  {name: 'Carlos Hernandez', company: 'Trancasa', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'},
  {name: 'Luis Hernandez', company: 'MX', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'},
  {name: 'Jose Sandovalz', company: 'Bimbo', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'},
  {name: 'Maribel Salinas', company: '1030', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'},
  {name: 'Gerardo Treviño', company: 'GP', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'},
  {name: 'Carlos Morales', company: 'Trancasa', issue: 'Entrevista', status: 'En Curso',id:'INE',gafette: 'VISITANTE', laptop: false, noSerie: 'NA'}

]
