import React from 'react'
import BandsData from '../../data/BandsData'
import SponsorContainer from '../components/SponsorContainer'
import ButtonTreeCategories from '../components/categories/Categories'
import Card from '../components/Card'

function Home() {
  // const cards = BandsData.map((item) => <Card key={item.id} item={item} />)

  return (
    <div>
      <h4 className="headertext">
        Hola Paisano, Bienvenido a Bandera Musical!!!, Escoje el tipo de musica
        que mas te gusta`???
      </h4>
      <ButtonTreeCategories />
      <div className="hero">
        <h4 className="headertext">
          Tal vez prefieras un Arista en Especial`???
        </h4>
        <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
        {/* <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut2" src="./images/astronaut.png" alt="" /> */}
        <div>
          <section className="cards-list">{BandsData.map((item) => <Card key={item.id} item={item} />)}</section>
        </div>

        <SponsorContainer />
      </div>
    </div>
  )
}

export default Home