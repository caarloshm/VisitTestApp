import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public register :any,
    public dialogRef: MatDialogRef<NewRegisterComponent>,
    
  ) { }

  matcher = new MyErrorStateMatcher();
  type: string | undefined;
  laptop = false;
  disabled = false;
  formRegister = new FormGroup({
    names       : new FormControl('', [Validators.required]),
    lastnames   : new FormControl('', [Validators.required]),
    issue       : new FormControl('', [Validators.required]),
    nameReceive : new FormControl('', [Validators.required]),
    gafete      : new FormControl('', [Validators.required]),
    typevisitor : new FormControl('', [Validators.required]),
    typeId      : new FormControl('', [Validators.required]),
    company     : new FormControl('', [Validators.required]),
    status      : new FormControl('', [Validators.required]),
    laptop      : new FormControl(''),
    model       : new FormControl(''),
    serviceTag  : new FormControl(''),

  })

  show:boolean = false;

  get formGroup() { return this.formRegister.controls; }

  ngOnInit(): void {

    
    this.type = this.register.type;
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
    if(this.formRegister.invalid) return;

    console.log(this.formGroup.names.value);

    // Object.keys(this.formGroup).map(key => tempTerminalObject[key] = this.formGroup[key].value);
    // this.auth.db.collection('terminals').insertOne(tempTerminalObject)
    //   .then(ref => this.terminal.id = ref.insertedId)
    //   .then(() => this.formGroup['id'].setValue(this.terminal.id.toString()))
    //   .then(() => this.updateTerminal())
    //   .then(() => this.dialogRef.close());
  }

  callingFunction() {
    console.log(this.formRegister.value);
   }


}
