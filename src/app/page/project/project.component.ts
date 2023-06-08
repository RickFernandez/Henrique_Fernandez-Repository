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
        imgSrcPc: '../../../assets/imgs/projects/DoctorCare_Desktop.svg',
        imgAltPc: 'Projeto DoctorCare exibido na tela de um computador',
      },
      projectImageTablet: {
        imgSrcTablet: '../../../assets/imgs/projects/DoctorCare_Tablet.svg',
        imgAltTablet: 'Projeto DoctorCare exibido na tela de um tablet',
      },
      projectImageCell: {
        imgSrcCell: '../../../assets/imgs/projects/DoctorCare_Phone.svg',
        imgAltCell: 'Projeto DoctorCare exibido na tela de um celular',
      },
      number: '01',
      title: 'DoctorCare',
      description: 'Site relacionado a saúde e bem-estar, com o intúito de captura de leads para agendamentos de assistência médica. Foi desenvolvido seguindo o padrão SPA (Single Page Application), onde não possúi navegação em diversas telas, contém todas as informações em apenas uma tela só.',
      technology: 'HTML, CSS, Javascript, Bootstrap, Responsividade',
      linkRepo: 'https://github.com/RickFernandez/DoctorCare',
      linkLive: 'https://hf-doctorcare.netlify.app/',
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
