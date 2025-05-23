import { Component } from '@angular/core';
import { AboutContentComponent } from "./about-content/about-content.component";
import { StatisticsComponent } from "../../components/statistics/statistics.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { DarkBrandsComponent } from "../../components/brands/dark-brands/dark-brands.component";
import { DreamProjectComponent } from "../../components/dream-project/dream-project.component";
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { FeaturesCardsComponent } from "../../components/features-section/features-cards/features-cards.component";

@Component({
  selector: 'app-about-us',
  imports: [AboutContentComponent, StatisticsComponent, FaqComponent, DarkBrandsComponent, DreamProjectComponent, TextBannerComponent, FeaturesCardsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
