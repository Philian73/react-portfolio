import { Header } from '../../../../widgets/Header'

import cls from './Page.module.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className={cls.mainBlock}>
        <div className={cls.container}>
          <div className={cls.body}>
            <span>Hi There</span>
            <h1>I am Nikolay Sulteev</h1>
            <p>Frontend Developer</p>
          </div>
          <div className={cls.images}></div>
        </div>
      </div>
    </>
  )
}
