import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-midia-card',
  templateUrl: './social-midia-card.component.html',
  styleUrls: ['./social-midia-card.component.scss'],
})
export class SocialMidiaCardComponent {
  @Input() socialIcon!: string;
  @Input() socialLink!: string;
  @Input() socialTarget: string | undefined = '_blank';
}
