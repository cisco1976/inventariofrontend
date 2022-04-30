import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioComponent } from './inventario/inventario.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    UsuariosComponent,
    HomeComponent,
    ProductosComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
