import CardData11 from '../../data/CardData11'
import Card from './Card'
// import Navbar from "./navbar/Navbar"
import ButtonTreeCategories from "./categories/Categories";

const cards11 = CardData11.map(item => {

  return (
    <Card
      key={item.id}
      item={item}
    />
  )
})

function Reggaeton() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="title2">Reggaeton y Bachatta</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>

      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>

      <img className="indianaut" src="./images/moonaut.png" alt="" />
      <img className="indianaut2" src="./images/astronaut.png" alt="" />
      <section className="cards-list">
        {cards11}
      </section>

    </div>
  )
}

export default Reggaeton