import { FC } from 'react'

import cls from './Skill.module.scss'

type PropsType = {
  title: string
  description: string
}
export const Skill: FC<PropsType> = ({ title, description }) => {
  return (
    <div className={cls.skill}>
      <div className={cls.icon}></div>
      <h3 className={cls.title}>{title}</h3>
      <span className={cls.description}>{description}</span>
    </div>
  )
}
