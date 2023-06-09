import './App.css';
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column ">
              <h2>Crear mi Cita</h2>
                <Form citas={citas} setCitas={setCitas}></Form>
            </div>
            <div className="one-half column">
              <h2>Administra tus citas</h2>
              {citas.map( cita => <Card citas={citas} setCitas={setCitas} nombre={cita.mascota} dueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></Card>)}
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
