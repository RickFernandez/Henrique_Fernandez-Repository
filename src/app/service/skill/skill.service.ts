import { Injectable } from '@angular/core';
import { ISkill } from '../../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

constructor() { }


  getAll(): ISkill[] {
    return [
      {
        front: [
            {
              name: "Html",
              imgSrc: "../../../assets/icon/Html_Icon.svg",
            },
            {
              name: "Css",
              imgSrc: "../../../assets/icon/Css_Icon.svg",
            },
            {
              name: "Sass/ Scss",
              imgSrc: "../../../assets/icon/Sass_Icon.svg",
            },
            {
              name: "JavaScript",
              imgSrc: "../../../assets/icon/Js_Icon.svg",
            },
            {
              name: "TypeScript",
              imgSrc: "../../../assets/icon/Ts_Icon.svg",
            },
            {
              name: "Angular",
              imgSrc: "../../../assets/icon/Angular_Icon.svg",
            },
            {
              name: "Bootstrap",
              imgSrc: "../../../assets/icon/Bootstrap_Icon.svg",
            }
        ],
        back: [
            {
              name: "DotNet",
              imgSrc: "../../../assets/icon/Dotnet_Icon.svg",
            },
            {
              name: "CSharp",
              imgSrc: "../../../assets/icon/Csharp_Icon.svg",
            },
            {
              name: "MySQL",
              imgSrc: "../../../assets/icon/MySQL_Icon.svg",
            },
            {
              name: "SQL Server",
              imgSrc: "../../../assets/icon/SQLServer_Icon.svg",
            },
            {
              name: "Java",
              imgSrc: "../../../assets/icon/Java_Icon.svg",
            }
        ],
        other: [
            {
              name: "Git",
              imgSrc: "../../../assets/icon/Git_Icon.svg",
            },
            {
              name: "GitHub",
              imgSrc: "../../../assets/icon/GitHub_Icon.svg",
            },
            {
              name: "Figma",
              imgSrc: "../../../assets/icon/Figma_Icon.svg",
            },
            {
              name: "Responsividade",
              imgSrc: "../../../assets/icon/Responsivity_Icon.svg",
            },
            {
              name: "WordPress",
              imgSrc: "../../../assets/icon/WordPress.svg",
            }
        ]
      }
    ]
  }
}
