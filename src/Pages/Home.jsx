import image from "../../public/Imgs/Trabajando-en-ello.png"
import '../assets/css/Home.css'

const Home = () =>{
    return(
        <main className="container-home-page">
            <img src={image} alt="working-in-that" />
            <p>
                Estamos trabajando para crear una mejor pagina, nos vemos 
                pronto!!
            </p>
        </main>
    )
}

export default Home