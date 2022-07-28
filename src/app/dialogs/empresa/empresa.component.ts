import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpresasComponent } from 'src/app/components/empresas/empresas.component';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public company :any,
    public dialogRef: MatDialogRef<EmpresasComponent>,
    
  ) { }

  matcher = new MyErrorStateMatcher();
  type: string | undefined;
  formCompany = new FormGroup({
    nameCompany : new FormControl('', [Validators.required]),
    address     : new FormControl('', [Validators.required]),
    phone       : new FormControl('', [Validators.required])
  })

  show:boolean = false;

  get formGroup() { return this.formCompany.controls; }

  ngOnInit(): void {
    this.type = this.company.type;
    if (this.type === 'edit') {
      // this.auth.isHrManager().then(isHrManager =>{if (isHrManager){this.formGroup['name'].disable()}});
      // this.auth.db.collection('terminals').findOne({ _id: this.terminal.id })
      //   .then(terminalInfo => {
      //     Object.keys(terminalInfo).map(key => {
      //       if (this.formGroup[key]) {
      //         this.formGroup[key].setValue(terminalInfo[key]);
      //       }
      //     });
      //   })
    }
  }

  
  createCompany(): void {
    let tempTerminalObject = {};
    if(this.formCompany.invalid) return;

    console.log(this.formGroup.nameCompany.value);

    // Object.keys(this.formGroup).map(key => tempTerminalObject[key] = this.formGroup[key].value);
    // this.auth.db.collection('terminals').insertOne(tempTerminalObject)
    //   .then(ref => this.terminal.id = ref.insertedId)
    //   .then(() => this.formGroup['id'].setValue(this.terminal.id.toString()))
    //   .then(() => this.updateTerminal())
    //   .then(() => this.dialogRef.close());
  }

  callingFunction() {
    console.log(this.formCompany.value);
   }

}
