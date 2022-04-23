import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    UsuariosComponent
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
