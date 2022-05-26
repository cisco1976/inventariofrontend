import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: usuario[] = [
    {position: 1, nombre: 'Hydrogen',apellido : 'sart', nIdentificacion: '102343483832', rol: 'H'},
    {position: 2, nombre: 'Helium',apellido : 'sart', nIdentificacion: '102343483832', rol: 'He'},
    {position: 3, nombre: 'Lithium',apellido : 'sart', nIdentificacion: '102343483832', rol: 'Li'},
    {position: 4, nombre: 'Beryllium',apellido : 'sart',  nIdentificacion: '102343483832', rol: 'Be'},
    {position: 5, nombre: 'Boron',apellido : 'sart',  nIdentificacion: '102343483832', rol: 'B'},
    {position: 6, nombre: 'Carbon', apellido : 'sart', nIdentificacion: '102343483832', rol: 'C'},
    {position: 7, nombre: 'Nitrogen',apellido : 'sart',  nIdentificacion: '102343483832', rol: 'N'},
    {position: 8, nombre: 'Oxygen', apellido : 'sart', nIdentificacion: '102343483832', rol: 'O'},
    {position: 9, nombre: 'Fluorine', apellido : 'sart', nIdentificacion: '102343483832', rol: 'F'},
    {position: 10, nombre: 'Neon',apellido : 'sart', nIdentificacion: '1014279171', rol: 'Ne'},
    {position: 11, nombre: 'jaja',apellido : 'sart', nIdentificacion: '1023303220', rol: 'ja'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: usuario){
    this.listUsuarios.unshift(usuario);
  }

}
