import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UsuariosComponent } from './pages/usuarios/usuarios.component';



const routes: Routes = [
  {path: '', redirectTo:'login' , pathMatch: 'full'},
  {path: 'login', component:LoginComponent},  
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'usuarios', component: UsuariosComponent}
  ]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
