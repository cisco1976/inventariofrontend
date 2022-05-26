import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

    roles: any[] = [
      {value: '1', viewValue: 'Administrador'},
      {value: '2', viewValue: 'Bodega'},
      {value: '3', viewValue: 'Vendedor'},
      {value: '4', viewValue: 'Administrador de transferencia'},
    ];

    form: FormGroup;
    listUsuario: number = 0;
  

  constructor(private _router: Router,
              private fb: FormBuilder,
              private _service: UsuarioService,
              private _snackBar: MatSnackBar) { 
                this.form = this.fb.group({
                  nombre: ['',Validators.required],
                  apellido: ['',Validators.required],
                  nIdentificacion: ['',Validators.required],
                  rol: ['',Validators.required],
                })
              }

  ngOnInit(): void {
    this.listUsuario = this._service.listUsuarios.length;
  }

  volver(){
    this._router.navigate(['home/usuarios'])
  }

  agregarUsuario(){

    const user: usuario = {
      position: this.listUsuario + 1,
      nombre: this.form.value.nombre,
      apellido : this.form.value.apellido,
      nIdentificacion: this.form.value.nIdentificacion,
      rol: this.form.value.rol,
    }

    this._service.agregarUsuario(user);
    this._router.navigate(['/home/usuarios'])

    this._snackBar.open('Usuario Agregado con exito','',{
      duration:2500,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
    });
  }
}
