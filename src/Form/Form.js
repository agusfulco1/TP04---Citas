//import './Form.css';
import Input from '../Form/Input/Input.js'
import Button from '../Form/Button/Button.js'
import '../App/App.css'
function Form(){
    return (
        <div className="form">
            <form>
                <label>Nombre Mascota</label>
                <Input tipo={'text'} nombre={'mascota'} placeholder={'Nombre Mascota'}></Input>
                <label>Nombre Dueño</label>
                <Input tipo={'text'} nombre={'propietario'} placeholder={'Nombre dueño de la mascota'}></Input>
                <label>Fecha</label>
                <Input tipo={'date'} nombre={'fecha'} ></Input>
                <label>Hora</label>
                <Input tipo={'time'} nombre={'hora'} ></Input>
                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width"></textarea>
                <Button tipo={'submit'} clase={'u-full-width button-primary'}></Button>
            </form>
        </div>
    )
}

export default Form;