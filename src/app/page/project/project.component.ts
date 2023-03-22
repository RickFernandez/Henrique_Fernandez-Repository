import { Component, OnInit } from '@angular/core';

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

  projects: any[] = [
    {
      projectImagePc: {
        imgSrcPc: '../../../assets/imgs/In_Progress(PC).svg',
        imgAltPc: 'Projeto em construção exibido na tela de um computador',
      },
      projectImageTablet: {
        imgSrcTablet: '../../../assets/imgs/In_Progress(Tablet).svg',
        imgAltTablet: 'Projeto em construção exibido na tela de um tablet',
      },
      projectImageCell: {
        imgSrcCell: '../../../assets/imgs/In_Progress(Cell).svg',
        imgAltCell: 'Projeto em construção exibido na tela de um celular',
      },
      number: '01',
      title: 'Projeto 01',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.',
      technology: 'HTML, CSS, Angular, TypeScript, Bootstrap',
      linkRepo: '#',
      linkLive: '#',
    },
    {
      projectImagePc: {
        imgSrcPc: '../../../assets/imgs/In_Progress(PC).svg',
        imgAltPc: 'Projeto em construção exibido na tela de um computador',
      },
      projectImageTablet: {
        imgSrcTablet: '../../../assets/imgs/In_Progress(Tablet).svg',
        imgAltTablet: 'Projeto em construção exibido na tela de um tablet',
      },
      projectImageCell: {
        imgSrcCell: '../../../assets/imgs/In_Progress(Cell).svg',
        imgAltCell: 'Projeto em construção exibido na tela de um celular',
      },
      number: '02',
      title: 'Projeto 02',
      description: 'Descrição do projeto 02',
      technology: 'Técnologias utilizadas',
      linkRepo: '#',
      linkLive: '#',
    },
    {
      projectImagePc: {
        imgSrcPc: '../../../assets/imgs/In_Progress(PC).svg',
        imgAltPc: 'Projeto em construção exibido na tela de um computador',
      },
      projectImageTablet: {
        imgSrcTablet: '../../../assets/imgs/In_Progress(Tablet).svg',
        imgAltTablet: 'Projeto em construção exibido na tela de um tablet',
      },
      projectImageCell: {
        imgSrcCell: '../../../assets/imgs/In_Progress(Cell).svg',
        imgAltCell: 'Projeto em construção exibido na tela de um celular',
      },
      number: '03',
      title: 'Projeto 03',
      description: 'Descrição do projeto 03',
      technology: 'Técnologias utilizadas',
      linkRepo: '#',
      linkLive: '#',
    },
  ];

  constructor() {}

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
