import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SectionHeadingComponent {

  constructor() {}

  @Input() background: string = "";
  @Input() title: string = "";
  @Input() count: number = 0;
}
