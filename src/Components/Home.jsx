import Nav from './Navbar'
import CardProducts from './CardCaracteristicas'
import smartphone from '../img/Carcateristicas/smartphone.jpg'
import startup from '../img/Carcateristicas/startup.jpg'
import target from '../img/Carcateristicas/target.jpg'
import worldwide from '../img/Carcateristicas/worldwide.jpg'
import group from '../img/Carcateristicas/group.jpg'
import computer from '../img/Carcateristicas/computer.jpg'


const caracteristicas = [
    {
        id: 1,
        image: `${smartphone}`,
        name: 'Responsive' ,
        description : 'Inclusión de las últimas tecnologias para el correcto funcionamiento en todos los dispositivos.'
    },
    {
        id: 2,
        image: `${startup}`,
        name: 'OPTIMA',
        description : 'Desarrollo óptimo para que tu web sea veloz Sin demoras.'
    },
    {
        id: 3,
        image: `${target}`,
        name: 'BUSCADORES',
        description : 'Podrán encontrarte desde cualquier buscador como Google, Yahoo, Bing, etc.'
    },
    {
        id: 4,
        image: `${group}`,
        name: 'SOCIALES',
        description : 'En el mundo de las redes sociales, nunca debe faltar un botón para compartir tu negocio'
    },
    {
        id: 5,
        image: `${worldwide}`,
        name: 'MAPA',
        description : 'Inclusión de un mapa para que tus clientes puedan encontrarte de una forma más fácil.'
    },
    {
        id: 6,
        image: `${computer}`,
        name: 'DISEÑO',
        description : 'Diseño personalizado, innovador y profesional. Le damos nuestro toque exlcusivo.'
    },


]

function Home() {
    return (
        <div>
            <Nav />
            <div>
                <CardProducts products={caracteristicas} />
            </div>
        </div>
    )
}

export default Home
