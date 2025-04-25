import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-banner',
  imports: [],
  templateUrl: './text-banner.component.html',
  styleUrl: './text-banner.component.css'
})
export class TextBannerComponent {
  @Input() title:string|null="";
  @Input() description:string|null="";
}
