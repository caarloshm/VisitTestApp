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
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public newUser :any,
    public dialogRef: MatDialogRef<NuevoUsuarioComponent>,
    
  ) { }

  matcher = new MyErrorStateMatcher();
  type: string | undefined;
  laptop = false;
  disabled = false;
  formNewUser = new FormGroup({
    names       : new FormControl('', [Validators.required]),
    lastnames   : new FormControl('', [Validators.required]),
    email       : new FormControl('', [Validators.required, Validators.email]),
    password    : new FormControl('', [Validators.required]),
    confirmPassword : new FormControl('', [Validators.required]),
    userType    : new FormControl('', [Validators.required]),
    terminal    : new FormControl('', [Validators.required])

  })

  show:boolean = false;

  get formGroup() { return this.formNewUser.controls; }

  ngOnInit(): void {

    this.type = this.newUser.type;
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
    if(this.formNewUser.invalid) return;

    console.log(this.formGroup.names.value);

    // Object.keys(this.formGroup).map(key => tempTerminalObject[key] = this.formGroup[key].value);
    // this.auth.db.collection('terminals').insertOne(tempTerminalObject)
    //   .then(ref => this.terminal.id = ref.insertedId)
    //   .then(() => this.formGroup['id'].setValue(this.terminal.id.toString()))
    //   .then(() => this.updateTerminal())
    //   .then(() => this.dialogRef.close());
  }

  callingFunction() {
    console.log(this.formNewUser.value);
   }

}
