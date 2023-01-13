import '../styles/index.css'
import '../styles/intro.css'

import Image from 'next/image'
import ButtonTreeCategories from './components/categories/Categories'
import Comments from './components/comments/Comments'
import SponsorContainer from './components/SponsorContainer'
import Clients from './components/Clients'
import Indianaut from '../images/indianaut.png'


export default function Intro() {
  return (
    <div className="hero">
      <div>

        <div>
          <div className="notranslate">
            <h1 className="title2">Bandera Musical</h1>
          </div>

          <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!, Escoje el tipo de musica que mas te gusta`???</h4>

          <ButtonTreeCategories />
        </div>
        <Image className="indianaut" src={Indianaut} alt='' />

        <Image className="indianaut2" src={Indianaut} alt='' />


        {/* <Image className="indianaut" src={Indianaut} alt='' /> */}

        {/* <Image className="indianaut2" src={Indianaut} alt='' width={0} height={0} /> */}
      </div>

      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
      <SponsorContainer />
      <Clients />
    </div>
  )
}
