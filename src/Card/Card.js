import '../App/App.js';
import Datos from './Datos/Datos.js'
function Card(props) {
    return (
    <div class="cita">
        <Datos dato={'Nina'}></Datos>
        <Datos dato={'Martin'}></Datos>
        <Datos dato={'2021-08-05'}></Datos>
        <Datos dato={'Nina'}></Datos>
        <Datos dato={'Nina'}></Datos>
    </div>
    )
}

export default Card;