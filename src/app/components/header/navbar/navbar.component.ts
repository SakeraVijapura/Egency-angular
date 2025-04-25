import { Component } from '@angular/core';
import { BtnComponent } from '../../btn/btn.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [BtnComponent,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
