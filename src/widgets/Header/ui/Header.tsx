import cls from './Header.module.scss'

export const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.nav}>
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
      </div>
    </div>
  )
}
