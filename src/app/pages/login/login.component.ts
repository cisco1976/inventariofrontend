import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  loading= false;
  hide=true;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router ) {
    this.form =this.fb.group({
      usuario:['',Validators.required],
      pass:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.pass;
    if (usuario == '1014279171' && password =="Horus2021*") {
      this.fakeLoading();
    }else{
    // Mostramos error
    this.error();
    this.form.reset();
    }
  }

  error(){    
    this._snackBar.open('Usuario y/o contraseña invalidos','',{
      duration:500,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
    });
  }
  
  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }

}
