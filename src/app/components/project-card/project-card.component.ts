import { Component, Input } from '@angular/core';

interface projectImg {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent {
  @Input() imgSrcPc!: string;
  @Input() imgAltPc!: string;
  @Input() imgSrcTablet!: string;
  @Input() imgAltTablet!: string;
  @Input() imgSrcCell!: string;
  @Input() imgAltCell!: string;
  @Input() title!: string;
  @Input() technology!: string;
  @Input() linkRepo!: string;
  @Input() linkLive!: string;
  @Input() cardNumber!: string;
  @Input() description!: string;


}
