import '../App/App.js';
function Card(props) {
    return (
    <div className="cita">
        <p>Mascota: <span>{props.citas[0]}</span></p>
        <p>Dueño: <span>{props.citas[1]}</span></p>
        <p>Fecha: <span>{props.citas[2]}</span></p>
        <p>Hora: <span>{props.citas[3]}</span></p>
        <p>Sintomas: <span>{props.citas[4]}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
    )
}

export default Card;