import CardData6 from '../../data/CardData6'
import Card from './Card'
import Navbar from "./header/Header"
import ButtonTreeCategories from "./categories/Categories";



const cards6 = CardData6.map(item => {

  return (
    <Card
      key={item.id}
      item={item}
    />
  )
}
)

function ClassicRock() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="title2">Rock Clasico Americano</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>

      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <img className="indianaut2" src="./images/rockguitarist.jpg" alt="" />
      <img className="indianaut" src="./images/moonaut.png" alt="" />
      <img className="indianaut2" src="./images/astronaut.png" alt="" />
      <section className="cards-list">
        {cards6}
      </section>

    </div>
  )
}

export default ClassicRock