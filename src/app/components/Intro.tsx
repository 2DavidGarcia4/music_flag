import "../../styles/intro.css"
import SponsorContainer from "./SponsorContainer"
import Clients from "./Clients"
import ButtonTreeCategories from "./categories/Categories";
import Comments from "./comments/Comments";


function Intro() {
  return (
    <div className="hero">
      <div>

        <div>
          <div className="notranslate">
            <h1 className="title2">Bandera Musical</h1>
          </div>

          <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!, Escoje el tipo de musica que mas te gusta`???</h4>

          <ButtonTreeCategories />
        </div>
        <img className="indianaut" src="./images/indianaut.png" alt="" />

        <img className="indianaut" src="./images/indianaut.png" alt="" />


        <video
          className="player-wrapper-3"
          width="100%"
          height="100%"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}>
          <source src="./images/Banderamusicalgreenspace.mp4" type="video/mp4" />
        </video>
        <img className="indianaut" src="./images/indianaut.png" alt="" />
        <img className="indianaut2" src="./images/indianaut.png" alt="" />

      </div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
      <SponsorContainer />
      <Clients />
    </div>











  )
}

export default Intro