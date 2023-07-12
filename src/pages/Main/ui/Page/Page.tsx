import { Header } from '../../../../widgets/Header'

import cls from './Page.module.scss'

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className={cls.mainBlock}></div>
    </>
  )
}
