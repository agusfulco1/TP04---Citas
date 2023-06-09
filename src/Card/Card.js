import './Card.css';
function Card(props) {
    const eliminarCita = (id) => {
        if (window.confirm("Seguro que quiere eliminar?")) {
            props.setCitas(props.citas.filter(cita => cita.id !== id))
        }
    }
    return (
    <div className="cita">
        <p>Mascota: <span>{props.nombre}</span></p>
        <p>Dueño: <span>{props.dueño}</span></p>
        <p>Fecha: <span>{props.fecha}</span></p>
        <p>Hora: <span>{props.hora}</span></p>
        <p>Sintomas: <span>{props.sintomas}</span></p>
        <button onClick={ () => eliminarCita(props.id)} className="button elimnar u-full-width">Eliminar ×</button>
    </div>
    
    
    )
}

export default Card;

// 