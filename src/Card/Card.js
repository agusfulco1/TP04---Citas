import '../App/App.js';
function Card(props) {
    const eliminarCita = (props) => {
        /*props.citas.esEliminado =  true
        console.log(props.citas)
        props.citas = props.citas.filter(cita => cita.esEliminado === false)
        props.setCitas(
            [
                ...props.citas,
                {
                    mascota: "",
                    dueño: "",
                    fecha: "",
                    hora: "",
                    sintomas : ""
                }
                
            ]
        )*/
        props.citas.esEliminado =  true
        console.log(props.citas)
        const citas = props.citas.filter(cita => console.log(cita))
        console.log(citas)
        props.setCitas(
            [
                ...citas   
            ]
        )
    }
    return (
    <div className="cita">
        <p>Mascota: <span>{props.nombre}</span></p>
        <p>Dueño: <span>{props.dueño}</span></p>
        <p>Fecha: <span>{props.fecha}</span></p>
        <p>Hora: <span>{props.hora}</span></p>
        <p>Sintomas: <span>{props.sintomas}</span></p>
        <button onClick={ () => eliminarCita(props)} className="button elimnar u-full-width">Eliminar ×</button>
    </div>
    )
}

export default Card;