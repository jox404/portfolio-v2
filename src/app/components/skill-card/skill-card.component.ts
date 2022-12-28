import { Component, Input } from '@angular/core';

type skillType = { name: string; icon: string; value?: string }[];
@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() skills: string[] | null = null;
  @Input() softSkills: skillType = [{ name: '', icon: '' }];
}
