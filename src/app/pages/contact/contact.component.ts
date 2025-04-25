import { Component } from '@angular/core';
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { GetInTouchComponent } from "../../components/get-in-touch/get-in-touch.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { FaqComponent } from "../../components/faq/faq.component";

@Component({
  selector: 'app-contact',
  imports: [TextBannerComponent, GetInTouchComponent, ContactSectionComponent, FaqComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
