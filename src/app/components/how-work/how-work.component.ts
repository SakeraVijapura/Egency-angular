import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-work',
  imports: [],
  templateUrl: './how-work.component.html',
  styleUrl: './how-work.component.css'
})
export class HowWorkComponent {
  @Input() span: string | null = '';
  @Input() title: string | null = '';
  @Input() description: string | null = '';
}
