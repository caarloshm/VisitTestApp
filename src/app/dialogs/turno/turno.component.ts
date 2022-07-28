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
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public turn :any,
    public dialogRef: MatDialogRef<TurnoComponent>,
    
  ) { }

  matcher = new MyErrorStateMatcher();
  type: string | undefined;
  formTurn = new FormGroup({
    turn       : new FormControl('', [Validators.required]),
    startHour  : new FormControl('', [Validators.required]),
    leaveHour  : new FormControl('', [Validators.required])
  })

  show:boolean = false;

  get formGroup() { return this.formTurn.controls; }

  ngOnInit(): void {

    this.type = this.turn.type;
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
    if(this.formTurn.invalid) return;

    console.log(this.formGroup.turn.value);

    // Object.keys(this.formGroup).map(key => tempTerminalObject[key] = this.formGroup[key].value);
    // this.auth.db.collection('terminals').insertOne(tempTerminalObject)
    //   .then(ref => this.terminal.id = ref.insertedId)
    //   .then(() => this.formGroup['id'].setValue(this.terminal.id.toString()))
    //   .then(() => this.updateTerminal())
    //   .then(() => this.dialogRef.close());
  }

  callingFunction() {
    console.log(this.formTurn.value);
   }

}
