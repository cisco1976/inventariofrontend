import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuService } from '../../services/menu.service';
import { Menu } from "../../interfaces/menu";
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
              private _menuService: MenuService,
              private router: Router) {
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
    this._menuService.getMenu().subscribe(c => {
      this.menu = c;
    })
  }

  logout(){
    this.router.navigate(['logout']);
  }

}
