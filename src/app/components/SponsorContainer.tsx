import Image from "next/image"

import Viagogo  from '../../images/viagogo.jpeg'
import Ontour  from '../../images/ontour.png'
import Malaracha  from '../../images/malaracha.png'
import Ollitas2  from '../../images/ollitas2.jpeg'
import Tecate  from '../../images/tecate.jpg'
import Masking  from '../../images/masking.png'
import Caliente  from '../../images/caliente.jpg'
import Rollingstone  from '../../images/rollingstone.jpg'
import Chapulogo  from '../../images/chapulogo.jpg'
import Indierocks  from '../../images/indierocks.jpg'
import Billboard  from '../../images/billboard.jpeg'
import Sonymusic  from '../../images/sonymusic.jpeg'
import Warner  from '../../images/warner.jpeg'
import Universal  from '../../images/universal.jpeg'
import Ocesa  from '../../images/ocesa.png'
import Citi  from '../../images/citi.jpg'
import Telmex  from '../../images/telmex.jpg'
import Arenavfg  from '../../images/arenavfg.jpg'
import Minerva  from '../../images/minerva.jpg'
import Cocacola  from '../../images/cocacola.jpg'

const sponsors = [
  {
    name: 'Viagogo',
    url: 'https://www.viagogo.com.mx/',
    status: 'noreferrer',
    image: Viagogo
  },
  {
    name: 'Ontour',
    url: 'https://www.ontourviajes.com/',
    status: 'noreferrer',
    image: Ontour
  },
  {
    name: 'Malaracha',
    url: 'https://malaracha.com/',
    status: 'noreferrer',
    image: Malaracha
  },
  {
    name: 'Ollitas2',
    url: 'https://www.casaorendain.com/product/tequila-ollitas/33?idioma=es',
    status: 'noreferrer',
    image: Ollitas2
  },
  {
    name: 'Tecate',
    url: 'https://tecate.com/codigotecate/agegate',
    status: 'noreferrer',
    image: Tecate
  },
  {
    name: 'Masking',
    url: 'https://www.maskkingmexico.com/',
    status: 'noreferrer',
    image: Masking
  },
  {
    name: 'Caliente',
    url: 'https://www.caliente.mx/ofertas/apuestas-deportivas/',
    status: 'noreferrer',
    image: Caliente
  },
  {
    name: 'Rollingstone',
    url: 'https://www.rollingstone.com/',
    status: 'noreferrer',
    image: Rollingstone
  },
  {
    name: 'Chapulogo',
    url: 'https://cerveceriachapultepec.com/',
    status: 'noreferrer',
    image: Chapulogo
  },
  {
    name: 'Indierocks',
    url: 'https://www.indierocks.mx/tv/',
    status: 'noreferrer',
    image: Indierocks
  },
  {
    name: 'Billboard',
    url: 'https://www.billboard.com/charts/hot-100/',
    status: 'noreferrer',
    image: Billboard
  },
  {
    name: 'Sonymusic',
    url: 'https://www.sonymusic.com.mx/',
    status: 'noreferrer',
    image: Sonymusic
  },
  {
    name: 'Warner',
    url: 'https://www.warnermusic.com.mx/',
    status: 'noreferrer',
    image: Warner
  },
  {
    name: 'Universal',
    url: 'https://umusicstore.com.mx/',
    status: 'noreferrer',
    image: Universal
  },
  {
    name: 'Ocesa',
    url: 'https://www.ocesa.com.mx/',
    status: 'noreferrer',
    image: Ocesa
  },
  {
    name: 'Citi',
    url: 'https://www.banamex.com/',
    status: 'noreferrer',
    image: Citi
  },
  {
    name: 'Telmex',
    url: 'http://www.auditorio-telmex.com/',
    status: 'noreferrer',
    image: Telmex
  },
  {
    name: 'Arenavfg',
    url: 'https://www.arenavfg.mx/',
    status: 'noreferrer',
    image: Arenavfg
  },
  {
    name: 'Minerva',
    url: 'https://www.cervezaminerva.mx/home',
    status: 'noreferrer',
    image: Minerva
  },
  {
    name: 'Cocacola',
    url: 'https://www.coca-cola.com.mx/',
    status: 'noreferrer',
    image: Cocacola
  },
]

function SponsorContainer() {
  return (
    <div className="sponsorcontainer">
      {sponsors.map(sponsor=> (
        <a key={sponsor.name} href={sponsor.url} target="_blank" rel={sponsor.status}>
          <Image className="sponsor" src={sponsor.image} alt={sponsor.name} width={400} height={400} />
        </a>  
      ))}
    </div>
  )
}

export default SponsorContainer