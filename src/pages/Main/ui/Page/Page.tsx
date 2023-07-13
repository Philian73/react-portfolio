import { Skill } from '../../../../entities/Skill/ui/Skill'
import { Header } from '../../../../widgets/Header'

import cls from './Page.module.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={cls.mainBlock}>
          <div className={cls.mainBlock_container}>
            <div className={cls.body}>
              <span>Hi There</span>
              <h1>I am Nikolay Sulteev</h1>
              <p>Frontend Developer</p>
            </div>
            <div className={cls.images}></div>
          </div>
        </section>
        <section className={cls.skillsBlock}>
          <div className={cls.skillsBlock_container}>
            <h2 className={cls.title}>My Skills</h2>
            <div className={cls.skills}>
              <Skill
                title="HTML"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
              <Skill
                title="CSS"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
              <Skill
                title="JS"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
