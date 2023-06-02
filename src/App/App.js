import './App.css';
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = evento => {
    evento.preventDefault();
    setCitas(
        [
            ...citas,
            evento.target.mascota.value,
            evento.target.propietario.value,
            evento.target.fecha.value,
            evento.target.hora.value,
            evento.target.sintomas.value,
        ]
    );
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column ">
              <h2>Crear mi Cita</h2>
              <form onSubmit={ (e) => agregarCita(e)}>
                <Form nombreLabel={'Nombre Mascota'} tipo={'text'} nombre={'mascota'} placeholder={'Nombre Mascota'} ></Form>
                <Form nombreLabel={'Nombre Dueño'} tipo={'text'} nombre={'propietario'} placeholder={'Nombre dueño de la mascota'} ></Form>
                <Form nombreLabel={'Fecha'} tipo={'date'} nombre={'fecha'} ></Form>
                <Form nombreLabel={'Hora'} tipo={'time'} nombre={'hora'} ></Form>
                <textarea name="sintomas" class="u-full-width"></textarea>
                <button type="submit" className={'u-full-width button-primary'}>Agregar Cita</button>
              </form>
            </div>
            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <Card citas={citas} nombre={'Nina'} dueño={'Martin'} fecha={"2021-08-05"} hora={'08:20'} sintomas={'Le duele la pierna'}></Card>
              <Card citas={citas} nombre={'Sifon'} dueño={'Flecha'} fecha={"2023-08-05"} hora={'09:24'} sintomas={'Duerme mucho'}></Card>
              <Card citas={citas} nombre={'Floki'} dueño={'Ari'} fecha={"2023-08-05"} hora={'16:15'} sintomas={'No esta comiendo'}></Card>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
