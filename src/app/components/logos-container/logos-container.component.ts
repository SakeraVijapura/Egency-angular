import { Component } from '@angular/core';

@Component({
  selector: 'app-logos-container',
  imports: [],
  templateUrl: './logos-container.component.html',
  styleUrl: './logos-container.component.css'
})
export class LogosContainerComponent {
  logos = [
    { src: 'assets/images/logos/digitalside.png', alt: 'Digitalside' },
    { src: 'assets/images/logos/vortex.png', alt: 'Vortex' },
    { src: 'assets/images/logos/travel.png', alt: 'Travel Explorer' },
    { src: 'assets/images/logos/fuzion.png', alt: 'Fuzion' },
    { src: 'assets/images/logos/mediafury.png', alt: 'MediaFury' },
  ];
}
