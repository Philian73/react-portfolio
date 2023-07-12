import cls from './Header.module.scss'

export const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.nav}>
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
      </nav>
    </header>
  )
}
