import { Component, Input } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-get-in-touch',
  imports: [BtnComponent,NgClass],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css'
})
export class GetInTouchComponent {
  @Input() page:string|null ="";
}
