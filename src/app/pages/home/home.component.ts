import { Component } from '@angular/core';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { BannerSectionComponent } from '../../components/banner-section/banner-section.component';
import { HowWorkComponent } from '../../components/how-work/how-work.component';
import { FeaturesContentComponent } from "../../features-section/features-content/features-content.component";
import { FeaturesCardsComponent } from "../../features-section/features-cards/features-cards.component";
import { ServiceContentComponent } from "../../components/service-section/service-content/service-content.component";
import { ServiceCardsComponent } from "../../components/service-section/service-cards/service-cards.component";
import { LatestWorkComponent } from "../../components/latest-work/latest-work.component";
import { GetStartedComponent } from "../../components/get-started/get-started.component";
import { EventsComponent } from "../../components/events/events.component";
import { OurTeamComponent } from "../../components/our-team/our-team.component";
import { FounderWordsComponent } from "../../components/founder-words/founder-words.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { AwardsComponent } from "../../components/awards/awards.component";
import { OurBlogComponent } from "../../components/our-blog/our-blog.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";
import { GetInTouchComponent } from "../../components/get-in-touch/get-in-touch.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { DreamProjectComponent } from "../../components/dream-project/dream-project.component";
import { LightBrandsComponent } from '../../components/brands/light-brands/light-brands.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StatisticsComponent,
    HeroSectionComponent,
    BannerSectionComponent,
    HowWorkComponent,
    FeaturesContentComponent,
    FeaturesCardsComponent,
    ServiceContentComponent,
    ServiceCardsComponent,
    LatestWorkComponent,
    GetStartedComponent,
    EventsComponent,
    OurTeamComponent,
    FounderWordsComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    AwardsComponent,
    OurBlogComponent,
    NewsletterComponent,
    GetInTouchComponent,
    ContactSectionComponent,
    DreamProjectComponent,
    LightBrandsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  quote: string = `"Put themselves in the merchant's shoes"`;
  description1: string =
    "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.";
  howWorksDescription: string =
    "Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.";

  description2: string =
    "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.";

  }
