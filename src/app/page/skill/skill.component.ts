import { Component } from '@angular/core';
import { ISkill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  skills: ISkill[] = this._skillService.getAll();

  constructor(private _skillService: SkillService) {}
}
