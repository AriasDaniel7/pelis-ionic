import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/principal', icon: 'home' },
    { title: 'Terror', url: '/terror', icon: 'arrow-forward' },
    { title: 'Acción', url: '/accion', icon: 'arrow-forward' },
    { title: 'Drama', url: '/drama', icon: 'arrow-forward' },
    { title: 'Romance', url: '/romance', icon: 'arrow-forward' },
    { title: 'Salir', url: '/login', icon: 'exit' },
  ];

  constructor(private router: Router) {}

  shouldShowMenu(): boolean {
    return this.router.url !== '/login';
  }

}
