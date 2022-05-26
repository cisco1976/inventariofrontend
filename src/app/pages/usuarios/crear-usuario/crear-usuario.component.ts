import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

    foods: any[] = [
      {value: '1', viewValue: 'Masculino'},
      {value: '2', viewValue: 'Femenino'},
      {value: '3', viewValue: 'Otro'},
    ];
  
  

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this._router.navigate([])
  }

}
