import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService }  from '../../services/login.service'
import { Login,CreditsResponse } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  loading= false;
  hide=true;
  private objLogin: Login;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router,
              private _loginService: LoginService) {
    this.form =this.fb.group({
      usuario:['',Validators.required],
      pass:['',Validators.required]
    }),
    this.objLogin = new Login();
   }

  ngOnInit(): void {
    this._loginService.finalizarSesion();
    localStorage.clear();
    localStorage.setItem("IsIdentity", "false");
  }

  ingresar(){
    this.objLogin.user = this.form.value.usuario;
    this.objLogin.pass = this.form.value.pass;
    this._loginService.getLogin(this.objLogin).pipe().subscribe(
      (resp: CreditsResponse)=>{
        if (resp.statusCode== 200) {
          localStorage.setItem("tokenId",resp.tokenId);
          localStorage.setItem("vistas", JSON.stringify(resp.detail.vistas));
          localStorage.setItem("roles", JSON.stringify(resp.detail.roles));
          localStorage.setItem("IsIdentity", "true");
          this.fakeLoading();
        }else{
          // Mostramos error
          this.error();
          this.form.reset();
        }
      }
    );
   
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
      this.router.navigate(['home']);
    }, 1500);
  }

}
