import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn',
  imports: [NgClass,RouterModule,RouterLink],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() title: string | null = "";
  @Input() btnClass: string | string[] = '';
  @Input() route:any = ""; 
}
