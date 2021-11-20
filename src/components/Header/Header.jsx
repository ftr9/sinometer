import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <img
        className={'HeaderLogo__main'}
        src={'./assets/logo.png'}
        alt={'logo'}
      />
      <a
        href={'https://www.facebook.com/profile.php?id=100074356586764'}
        className="Header__button"
      >
        <p>Our page</p>
        <img src={'/assets/logo.png'} alt={'logo'} />
      </a>
    </div>
  )
}

export default Header
