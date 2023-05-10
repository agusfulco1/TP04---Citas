//import './Form.css';
import Input from '../Form/Input/Input.js'
import Button from '../Form/Button/Button.js'
function Form(){
    return (
        <div className="form">
            <form>
                <label>Nombre Mascota</label><br></br>
                <Input tipo={'text'} nombre={'mascota'} placeholder={'Nombre Mascota'}></Input><br></br>
                <label>Nombre Dueño</label><br></br>
                <Input tipo={'text'} nombre={'propietario'} placeholder={'Nombre dueño de la mascota'}></Input><br></br>
                <label>Fecha</label><br></br>
                <Input tipo={'date'} nombre={'fecha'} ></Input><br></br>
                <label>Hora</label><br></br>
                <Input tipo={'time'} nombre={'hora'} ></Input><br></br>
                <label>Sintomas</label><br></br>
                <textarea name="sintomas" class="u-full-width"></textarea><br></br>
                <Button tipo={'submit'} clase={'u-full-width button-primary'}></Button>
            </form>
        </div>
    )
}

export default Form;