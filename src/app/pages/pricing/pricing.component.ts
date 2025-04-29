import { Component } from '@angular/core';
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { DreamProjectComponent } from "../../components/dream-project/dream-project.component";
import { PricingSectionComponent } from "../../components/pricing-section/pricing-section.component";

@Component({
  selector: 'app-pricing',
  imports: [TextBannerComponent, DreamProjectComponent, PricingSectionComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
