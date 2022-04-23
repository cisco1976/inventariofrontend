import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  usuario } from "../../interfaces/usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: usuario[] = [
    {position: 1, nombre: 'Hydrogen', nIdentificacion: '102343483832', rol: 'H'},
    {position: 2, nombre: 'Helium', nIdentificacion: '102343483832', rol: 'He'},
    {position: 3, nombre: 'Lithium', nIdentificacion: '102343483832', rol: 'Li'},
    {position: 4, nombre: 'Beryllium',  nIdentificacion: '102343483832', rol: 'Be'},
    {position: 5, nombre: 'Boron',  nIdentificacion: '102343483832', rol: 'B'},
    {position: 6, nombre: 'Carbon',  nIdentificacion: '102343483832', rol: 'C'},
    {position: 7, nombre: 'Nitrogen',  nIdentificacion: '102343483832', rol: 'N'},
    {position: 8, nombre: 'Oxygen',  nIdentificacion: '102343483832', rol: 'O'},
    {position: 9, nombre: 'Fluorine',  nIdentificacion: '102343483832', rol: 'F'},
    {position: 10, nombre: 'Neon', nIdentificacion: '1014279171', rol: 'Ne'},
  ];

  displayedColumns: string[] = ['position','nombre', 'nIdentificacion', 'rol','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
