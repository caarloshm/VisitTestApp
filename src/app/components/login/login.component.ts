import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Error when invalid control is dirty or touched
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  form = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password     : new FormControl('', [Validators.required])
  })

  constructor(
    // public auth: AuthService,
    private fb: FormBuilder,
    // private common: CommonService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   email: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.required])]
    // });
    // this.auth.isAuth()
    //   .then(isLogged => isLogged ? this.router.navigate(['dashboard/profile']) : null)
    //   .finally(() => this.common.spinner.hide())
  }

    onSubmit() {
      if (this.form.valid == true) {
        // this.auth.login(this.form.get('email').value, this.form.get('password').value)
        //   .then(() => this.common.toast('success', '', 'Welcome!'))
        //   .then(() => this.router.navigate(['/dashboard/profile']))
        //   .catch((error: StitchClientError) => {
        //     switch (error.errorCode) {
        //       case 46:
        //         this.form.get('password').setErrors({ mismatch: true })
        //         this.common.toast('error', '', 'Invalid email/password')
        //         break;
        //       case 45:
        //         this.common.toast('warning', '', 'This account is suspended, please contact IT Support!')
        //         break;
        //     }
        //   })
        //   .finally(() => this.common.spinner.hide())
      }
    }

    openDialog(): void {
      //this.common.spinner.show();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '40%';
      dialogConfig.maxWidth = '100vw';
      //dialogConfig.data = obj;
  
      dialogConfig.panelClass = '';
  
      // const dialogRef = this.dialog.open(ResetPasswordComponent , dialogConfig);
  
      // dialogRef.afterClosed().toPromise().then(() => console.log('here'));
    }
  }