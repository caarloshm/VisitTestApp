import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public usertype :any,
    public dialogRef: MatDialogRef<UsuarioComponent>,
    
  ) { }

  matcher = new MyErrorStateMatcher();
  type: string | undefined;
  formUsertype = new FormGroup({
    nameUsertype : new FormControl('', [Validators.required])
  })

  show:boolean = false;

  get formGroup() { return this.formUsertype.controls; }

  ngOnInit(): void {

    this.type = this.usertype.type;
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

  createTerminal(): void {
    let tempTerminalObject = {};
    if(this.formUsertype.invalid) return;

    console.log(this.formGroup.nameUsertype.value);

    // Object.keys(this.formGroup).map(key => tempTerminalObject[key] = this.formGroup[key].value);
    // this.auth.db.collection('terminals').insertOne(tempTerminalObject)
    //   .then(ref => this.terminal.id = ref.insertedId)
    //   .then(() => this.formGroup['id'].setValue(this.terminal.id.toString()))
    //   .then(() => this.updateTerminal())
    //   .then(() => this.dialogRef.close());
  }

  callingFunction() {
    console.log(this.formUsertype.value);
   }

}
