import { Component, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-dream-project',
  imports: [BtnComponent],
  templateUrl: './dream-project.component.html',
  styleUrl: './dream-project.component.css',
})
export class DreamProjectComponent {
  @Input() btnTitle: string | null = '';
}
