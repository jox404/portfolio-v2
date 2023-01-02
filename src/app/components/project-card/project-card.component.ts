import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() background!: string;
  @Input() links!: {
    pageOnline: string | undefined;
    repository: string | undefined;
  };
}
