import Link from "next/link"
import Image from "next/image"

import HomeLogo from '../../../images/homelogo.png'
import Mariachi from '../../../images/regimex1.png'
import Banda from '../../../images/bandalogo.png'
import Norteño from '../../../images/norteño.png'
import Cumbias from '../../../images/cumbialogo.png'
import Rockesp from '../../../images/rockesp.jpeg'
import Raptrap from '../../../images/rap3.jpg'
import Reggaeton from '../../../images/reggaetonlogo.png'
import Reggae from '../../../images/reggaelogo.jpg'
import Alternative from '../../../images/alternativelogo.png'
import Pop from '../../../images/pop.jpeg'
import Classicrock from '../../../images/classicrock.jpeg'
import Clubmusic from '../../../images/clubmusiclogo.jpeg'

const categories = [
  {
    name: 'home',
    image: HomeLogo
  },
  {
    name: 'mariachi',
    image: Mariachi
  },
  {
    name: 'banda',
    image: Banda
  },
  {
    name: 'norteño',
    image: Norteño
  },
  {
    name: 'cumbias',
    image: Cumbias
  },
  {
    name: 'rockesp',
    image: Rockesp
  },
  {
    name: 'raptrap',
    image: Raptrap
  },
  {
    name: 'reggaeton',
    image: Reggaeton
  },
  {
    name: 'reggae',
    image: Reggae
  },
  {
    name: 'alternative',
    image: Alternative
  },
  {
    name: 'pop',
    image: Pop
  },
  {
    name: 'classicrock',
    image: Classicrock
  },
  {
    name: 'clubmusic',
    image: Clubmusic
  },
]

function Categories() {
  return (
    <div>
      {categories.map((category)=> (
        <Link key={category.name} className="btn" href={`/${category.name}`}>
          <Image className="sponsor" src={category.image} alt={category.name} width={400} height={400} />
        </Link> 
      ))}
    </div>
  )
}

export default Categories