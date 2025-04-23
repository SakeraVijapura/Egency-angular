import { Component, Input } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-banner-section',
  imports: [BtnComponent,NgClass],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent {
  @Input() bannerImage: string | null = '';
  @Input() span: string | null = '';
  @Input() title: string | null = '';
  @Input() subTitle: string | null = '';
  @Input() description: string | null = '';
  @Input() btnTitle: string | null = '';
  @Input() abstractContent: string = '';
}
