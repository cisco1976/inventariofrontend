import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from "./pages/home/home.component"
import { ProductosComponent } from './pages/productos/productos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';



const routes: Routes = [
  {path: '', redirectTo:'login' , pathMatch: 'full'},
  {path: 'login', component:LoginComponent},  
  {path: 'home', component: HomeComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'inventario', component: InventarioComponent},
  ]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
