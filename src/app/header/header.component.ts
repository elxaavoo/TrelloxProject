import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){};
  volverHome(){
    this.router.navigate([""]);
  }

  volverTablero(){
    this.router.navigate(["/tablero"]);
  }
}
