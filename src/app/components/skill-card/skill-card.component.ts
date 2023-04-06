import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skillTitle!: string;
  @Input() skillImgSrc!: string;
  @Input() skillImgAlt!: string;
  @Input() skillLegend!: string;
  @Input() skills!: any[];
}
