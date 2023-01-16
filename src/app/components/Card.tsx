import ReactPlayer from 'react-player/lazy'
import SponsorContainer from './SponsorContainer'
import LikeButtons from './LikeButtons'
import BanderaMedia from './BanderaMedia'
import StarRating from './StarRating'
import { GiBlackFlag } from 'react-icons/gi';
import { FaFacebook } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaDeezer } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { FaTiktok } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { FaNapster } from 'react-icons/fa';
import Comments from "./comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BandsType } from '../../types'
import Image from 'next/image'


function Card({item}: {item: BandsType}) {

  let badgeText = ''
  if (!item.openSpots) {
    badgeText = "No Mas Boletos"
  }else if (item.openSpots && item.openSpots > 0) {
    badgeText = "Boletos Disponibles"
  }


  return (
    <div className="card">
      {(badgeText) && (<div className="card--badge">{badgeText}</div>)}
      {/* <Image className="card--image" src="/astro.png" alt='card' width={200} height={200} /> */}
      {/* <img src={`../../images/${item.coverImg}`} className="card--image" alt="card" /> */}
      <div className="notranslate">
        <h1 className="card--title">{item.title}</h1>
        <p className="category">{item.category}</p>
      </div>
      {/* <StarRating /> */}
      {/* <img src={`../../images/${item.locationImg}`} className="locationImg" alt="location" /> */}
      <p className="description">{item.description}</p>
      
      {/* <div>

        <ReactPlayer
          className="video"
          width="280px"
          height="180px"
          light
          controls url={item.videourl}
          playIcon=<BsFillPlayCircleFill />
        />
      </div> */}

      {/* <LikeButtons /> */}
      {/* <div>
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div> */}
      <div className="slidertextdiv">
        <h1 className="slidertext">Presiona un Link para visitar la red social del artista</h1>
      </div>
      {/* <div className='third-party-icons'>
        <a target="_blank" rel="noreferrer" href={item.websiteurl} className='icons-bandera' id="third-party-grid">
          <GiBlackFlag /></a>

        <a target="_blank" rel="noreferrer" href={item.facebook} className='icons-fb' id="third-party-grid"><FaFacebook /></a>

        <a target="_blank" rel="noreferrer" href={item.youtube} className='icons-YT' id="third-party-grid"><FaYoutube /></a>

        <a target="_blank" rel="noreferrer" href={item.instagram} className='icons-instagram' id="third-party-grid"><FaInstagramSquare /></a>

        <a target="_blank" rel="noreferrer" href={item.twitter} className='icons-twitter' id="third-party-grid"><FaTwitterSquare /></a>

        <a target="_blank" rel="noreferrer" href={item.tiktok} className='icons-tiktok' id="third-party-grid" ><FaTiktok /></a>

        <a target="_blank" rel="noreferrer" href={item.spotify} className='icons-spotify' id="third-party-grid"><FaSpotify /></a>

        <a target="_blank" rel="noreferrer" href={item.deezer} className='icons-deezer' id="third-party-grid" ><FaDeezer /></a>

        <a target="_blank" rel="noreferrer" href={item.apple} className='icons-itunes' id="third-party-grid"><SiApplemusic />
        </a>

        <a target="_blank" rel="noreferrer" href={item.soundcloud} className='icons-soundcloud' id="third-party-grid"><FaSoundcloud />
        </a>
        <a target="_blank" rel="noreferrer" href={item.tidal} className='icons-tidal' id="third-party-grid"><SiTidal />
        </a>

        <a target="_blank" rel="noreferrer" href={item.napster} className='icons-napster' id="third-party-grid"><FaNapster />
        </a>
        <a href={item.wiki} target="_blank" rel="noreferrer">
          <img src="../images/wiki.jpg" className="sponsor" alt="" style={{ maxWidth: '400px' }} /></a>
        <a href="https://www.informador.mx/" target="_blank" rel="noreferrer">
          <img src="../images/informador.jpg" className="sponsor" alt="" style={{ maxWidth: '400px' }} /></a>

        <a href="https://www.mtvla.com/" target="_blank" rel="noreferrer">
          <img src="../images/mtv.jpg" className="sponsor" alt="" style={{ maxWidth: '400px' }} />
        </a>
        <a href="https://www.estadioakron.mx/" target="_blank" rel="noreferrer">
          <img src="../images/akron.jpg" className="sponsor" alt="" style={{ maxWidth: '400px' }} />
        </a>

      </div> */}

      {/* <div>
        <SponsorContainer />
      </div> */}


      {/* <div>
        <BanderaMedia />
      </div> */}

    </div>


  )
}

export default Card