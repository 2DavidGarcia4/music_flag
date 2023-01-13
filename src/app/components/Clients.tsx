import Image from "next/image"

import Viagogo from '../../images/viagogo.jpeg'
import Josecuervo from '../../images/josecuervo.jpg'
import Corona from '../../images/corona.jpg'
import Smok from '../../images/smok.jpg'
import Caliente from '../../images/caliente.jpg'
import Rollingstone from '../../images/rollingstone.jpg'
import Chapulogo from '../../images/chapulogo.jpg'
import Billboard from '../../images/billboard.jpeg'
import Indierocks from '../../images/indierocks.jpg'
import Variety from '../../images/variety.jpeg'
import Sonymusic from '../../images/sonymusic.jpeg'
import Warner from '../../images/warner.jpeg'
import Universal from '../../images/universal.jpeg'
import Ocesa from '../../images/ocesa.png'
import Merchbar from '../../images/merchbar.jpg'
import Citi from '../../images/citi.jpg'
import Gnp from '../../images/gnp.jpg'
import Telmex from '../../images/telmex.jpg'
import Arenavfg from '../../images/arenavfg.jpg'
import Minerva from '../../images/minerva.jpg'

const clients = [
  {
    name: 'Viagogo',
    url: 'https://www.viagogo.com.mx/',
    image: Viagogo,
    status: 'noreferrer'
  },
  {
    name: 'Josecuervo',
    url: 'https://cuervo.com/',
    image: Josecuervo,
    status: 'noreferrer'
  },
  {
    name: 'Corona',
    url: 'https://www.corona.com/en',
    image: Corona,
    status: 'noreferrer'
  },
  {
    name: 'Smok',
    url: 'https://www.smokhaus.com.mx/',
    image: Smok,
    status: 'noreferrer'
  },
  {
    name: 'Caliente',
    url: 'https://www.caliente.mx/ofertas/apuestas-deportivas',
    image: Caliente,
    status: 'noreferrer'
  },
  {
    name: 'Rollingstone',
    url: 'https://www.rollingstone.com/',
    image: Rollingstone,
    status: 'noreferrer'
  },
  {
    name: 'Chapulogo',
    url: 'https://cerveceriachapultepec.com/',
    image: Chapulogo,
    status: 'noreferrer'
  },
  {
    name: 'Billboard',
    url: 'https://www.billboard.com/',
    image: Billboard,
    status: 'noreferrer'
  },
  {
    name: 'Indierocks',
    url: 'https://www.indierocks.mx/tv/',
    image: Indierocks,
    status: 'noreferrer'
  },
  {
    name: 'Variety',
    url: 'https://variety.com/c/global/',
    image: Variety,
    status: 'noreferrer'
  },
  {
    name: 'Sonymusic',
    url: 'https://www.sonymusic.com.mx/',
    image: Sonymusic,
    status: 'noreferrer'
  },
  {
    name: 'Warner',
    url: 'https://www.warnermusic.com.mx/',
    image: Warner,
    status: 'noreferrer'
  },
  {
    name: 'Universal',
    url: 'https://umusicstore.com.mx/',
    image: Universal,
    status: 'noreferrer'
  },
  {
    name: 'Ocesa',
    url: 'https://www.ocesa.com.mx/',
    image: Ocesa,
    status: 'noreferrer'
  },
  {
    name: 'Merchbar',
    url: 'https://www.merchbar.com/',
    image: Merchbar,
    status: 'noreferrer'
  },
  {
    name: 'Citi',
    url: 'https://www.banamex.com/',
    image: Citi,
    status: 'noreferrer'
  },
  {
    name: 'Gnp',
    url: 'https://www.gnp.com/',
    image: Gnp,
    status: 'noreferrer'
  },
  {
    name: 'Telmex',
    url: 'http://www.auditorio-telmex.com/',
    image: Telmex,
    status: 'noreferrer'
  },
  {
    name: 'Arenavfg',
    url: 'https://www.arenavfg.mx/',
    image: Arenavfg,
    status: 'noreferrer'
  },
  {
    name: 'Minerva',
    url: 'https://www.cervezaminerva.mx/home',
    image: Minerva,
    status: 'noreferrer'
  },
]

function Clients() {
  return (
    <div className="sponsorcontainer">
      {clients.map(client=> (
        <a key={client.name} href={client.url} target="_blank" rel={client.status}>
          <Image className="sponsor" src={client.image} alt={client.name} width={400} height={400} />
        </a>
      ))}
     

    </div>


  )
}

export default Clients