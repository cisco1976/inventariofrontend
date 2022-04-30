import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from '../../services/login.service';
import { Menu } from '../../interfaces/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menu: Menu[] =[];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private _logout:LoginService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this.menu = JSON.parse(localStorage.getItem('vistas') || "");
  }

  logout(){
    this._logout.finalizarSesion();
  }

}
