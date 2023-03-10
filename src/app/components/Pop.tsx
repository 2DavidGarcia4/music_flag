import CardData4 from '../../data/CardData4'
import Card from './Card'
// import Navbar from "./navbar/Navbar"
import ButtonTreeCategories from "./categories/Categories";


const cards4 = CardData4.map(item => {

  return (
    <Card
      key={item.id}
      item={item}
    />
  )
})

function Pop() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="title2">Pop Internacional</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>

      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>

      <img className="indianaut2" src="./images/astronaut.png" alt="" />
      <img className="indianaut" src="./images/astronaut.png" alt="" />
      <section className="cards-list">
        {cards4}
      </section>
    </div>
  )
}

export default Pop