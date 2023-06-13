interface SkillStructure {
  name: string,
  imgSrc: string,
}

export interface ISkill {
  front: SkillStructure[]
  back: SkillStructure[]
  other: SkillStructure[]
}
