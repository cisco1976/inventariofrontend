import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
    ],
    exports:[
      NavbarComponent,
      SidenavComponent
    ],
    imports: [
    CommonModule,
    RouterModule,
    MaterialModule
    ]
})
export class ComponentsModule { }
