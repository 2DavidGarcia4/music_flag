import Link from "next/link"
import { BandsType } from "../../types"


function ButtonTreeChannels({item}: {item: BandsType}) {
  return (
    <div>
      <div className="channelcontainer">
        <Link className="btn" href={item.bandera || ''}>
          <img src={`../images/${item.coverImg}`} className="channels" alt="" style={{maxWidth: '400px'}} />
          <h6 className="channelcardtitle">{item.title}</h6> 
        </Link> 
      </div>
    </div>
  )
}

export default ButtonTreeChannels