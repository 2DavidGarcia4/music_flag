import CardData7 from '../../data/CardData7'
import Card from './Card'
import Navbar from "./header/Header"
import ButtonTreeCategories from "./categories/Categories";


const cards7 = CardData7.map(item => {
  return (
    <Card
      key={item.id}
      item={item}
    />
  )
})

function RockEsp() {
  return (
    <div>
      <Navbar />
      <h1 className="title2">Rock en Español</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>

      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut2" src="./images/moonaut.png" alt="" />
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut" src="./images/rockguitarist.jpg" alt="" />


      <section className="cards-list">
        {cards7}
      </section>

    </div>
  )
}

export default RockEsp