import style from './Header.module.css'
import Image from "next/image"
import Link from "next/link"
import NavbarLogo from '../../../images/mobileregistered.png'
import FlagLogo3 from '../../../images/goldmusic2.png'
import FlagLogo4 from '../../../images/aguiladorada.jpeg'

function Navbar() {
  return (
    <header className={style.navbar}>
      <Link href="/intro">
        <Image className={style['navbar-logo']} src={NavbarLogo} alt='Logo' />
      </Link>
      <div className={style["flip-box"]}>
        <div className={style["flip-box-inner"]}>

          <div className={style["flip-box-front"]}>
            <Image className={style["flag-logo3"]} src={FlagLogo3} alt='Mexico' />
          </div>

          <div className={style["flip-box-back"]}>
            <Image className={style["flag-logo4"]} src={FlagLogo4} alt='Mexico' />
          </div>

        </div>

      </div>
    </header>
  )
}

export default Navbar