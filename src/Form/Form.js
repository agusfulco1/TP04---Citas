import './Form.css'
import Input from '../Form/Input/Input.js'
import Button from '../Form/Button/Button.js'
function Form({citas,setCitas}){
    const agregarCita = evento => {
        evento.preventDefault();    
        setCitas(
            [
                ...citas,
                {
                    
                    mascota: evento.target.mascota.value,
                    dueño: evento.target.propietario.value,
                    fecha: evento.target.fecha.value,
                    hora: evento.target.hora.value,
                    sintomas: evento.target.sintomas.value,
                    id: Math.floor(Math.random()*1E16),
                }
            ]
        );
        //habilitarlo para cuando se envie
        /*evento.target.mascota.value ='';
        evento.target.propietario.value = '';
        evento.target.fecha.value = '';
        evento.target.hora.value = '';
        evento.target.sintomas.value = '';*/
    }
    return (
        <div className="form">
            <form onSubmit={ (e) => agregarCita(e)}>
                <label>Nombre Mascota</label>
                <Input tipo={'text'} nombre={'mascota'} placeholder={'Nombre Mascota'}></Input>
                <label>Nombre Dueño</label>
                <Input tipo={'text'} nombre={'propietario'} placeholder={'Nombre dueño de la mascota'}></Input>
                <label>Fecha</label>
                <Input tipo={'date'} nombre={'fecha'} ></Input>
                <label>Hora</label>
                <Input tipo={'time'} nombre={'hora'} ></Input>
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <Button tipo={'submit'} clase={'u-full-width button-primary'}></Button>
            </form>
        </div>
    )
}

export default Form;