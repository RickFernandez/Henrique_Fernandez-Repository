import { Injectable } from '@angular/core';
import { IProject } from '../../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAll(): IProject[] {
    return [
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
        title: 'HFood (em construção)',
        description: 'Será um projeto relacionado ao mercado de Food Delivery. Tendo como inspiração o IFood, onde os usuários poderão pesquisar e fazer pedidos de comidas. O projeto ainda está sendo desenvolvido, mas será lançado em breve! =)',
        technology: 'HTML, Scss, Boostrap, Typescript, Angular, Responsividade',
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
        title: 'Horgnized (em construção)',
        description: 'Será um projeto que te ajudará a organizar suas demandas e metas. Nele você poderá mapeá-las e ir atualizando seus status ao longo do tempo. O projeto ainda está sendo desenvolvido, mas será lançado em breve! =)',
        technology: 'HTML, Scss, Boostrap, Typescript, Angular, Responsividade, ',
        linkRepo: '#',
        linkLive: '#',
      },
    ];
  }
}
