import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectedIndex: number = 0;
  indicators: boolean = true;
  controls: boolean = true;
  autoSlide: boolean = false;
  slideInterval = 5000;

  projects: IProject[] = this._projectService.getAll();

  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    if (this.autoSlide) {
      this.onAutoSlide();
    }
  }

  onAutoSlide(): void {
    setInterval(() => {
      this.onNext();
    }, this.slideInterval);
  }

  selectedCard(index: number): void {
    this.selectedIndex = index;
  }

  onPrev(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.projects.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNext(): void {
    if (this.selectedIndex === this.projects.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
