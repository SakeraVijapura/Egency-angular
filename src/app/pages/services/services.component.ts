import { Component } from '@angular/core';
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { ServicesAccordionComponent } from "./services-accordion/services-accordion.component";
import { HowWorkComponent } from "../../components/how-work/how-work.component";
import { DreamProjectComponent } from "../../components/dream-project/dream-project.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TextBannerComponent, ServicesAccordionComponent, HowWorkComponent, DreamProjectComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
