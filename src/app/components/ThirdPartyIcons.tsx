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
import { BsGlobe } from 'react-icons/bs'
import { FcWikipedia } from 'react-icons/fc'
import { GiBlackFlag } from 'react-icons/gi';
import Link from 'next/link';
import { BandsType } from '../../types';


function ThirdPartyIcons({item}: {item: BandsType}) {
  return (
    <div className='third-party-icons2'>
      
      <Link className="icons-bandera"  href="/home"><GiBlackFlag /></Link>

      <a target="_blank" rel="noreferrer" href={item.websiteurl} className='icons-bandera' id="third-party-grid">
          <BsGlobe /></a>
        
       <a target="_blank" rel="noreferrer" href={item.facebook} className='icons-fb' id="third-party-grid"><FaFacebook/></a>
                         
        <a target="_blank" rel="noreferrer" href={item.youtube} className='icons-YT' id="third-party-grid"><FaYoutube /></a>
                         
        <a target="_blank" rel="noreferrer" href={item.instagram} className='icons-instagram' id="third-party-grid"><FaInstagramSquare /></a>
                         
        <a target="_blank" rel="noreferrer" href={item.twitter} className='icons-twitter' id="third-party-grid"><FaTwitterSquare /></a>
          
        <a target="_blank" rel="noreferrer" href={item.tiktok} className='icons-tiktok' id="third-party-grid" ><FaTiktok /></a>
        
        <a target="_blank" rel="noreferrer" href={item.spotify} className='icons-spotify' id="third-party-grid"><FaSpotify /></a>
                      
        <a target="_blank" rel="noreferrer" href={item.deezer} className='icons-deezer' id="third-party-grid" ><FaDeezer /></a>
                  
        {/* <a target="_blank" rel="noreferrer" href={item.itunes} className='icons-itunes' id="third-party-grid"><SiApplemusic />
        </a> */}
                  
        <a target="_blank" rel="noreferrer" href={item.soundcloud} className='icons-soundcloud' id="third-party-grid"><FaSoundcloud />
        </a>        
        <a target="_blank" rel="noreferrer" href={item.tidal} className='icons-tidal' id="third-party-grid"><SiTidal />
        </a>
                  
        <a target="_blank" rel="noreferrer" href={item.napster} className='icons-napster' id="third-party-grid"><FaNapster />
          </a>
        
      <a target="_blank" rel="noreferrer" href={item.wiki} className="icons-wiki" id="third-party-grid">
          <FcWikipedia /></a>
      </div>
  )
}

export default ThirdPartyIcons