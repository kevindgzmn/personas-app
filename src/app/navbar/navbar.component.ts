import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  syntedaLogoPath: string;

  constructor() {
    this.syntedaLogoPath = '/assets/images/synteda-logo.png';
  }

}
