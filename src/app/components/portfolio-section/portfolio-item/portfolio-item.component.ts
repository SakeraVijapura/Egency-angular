import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  imports: [RouterLink],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css',
})
export class PortfolioItemComponent {
  @Input() routerLink: any[] | any = '';
  @Input() image: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() bigItem: boolean = false;
}
