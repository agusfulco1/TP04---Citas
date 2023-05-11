import './App.css';
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column ">
              <h2>Crear mi Cita</h2>
              <Form></Form>
            </div>
            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <Card nombre={'Nina'} dueño={'Martin'} fecha={2021-08-25} hora={'08:20'} sintomas={'Le duele la pierna'}></Card>
              <Card nombre={'Sifon'} dueño={'Flecha'} fecha={2023-08-25} hora={'09:24'} sintomas={'Duerme mucho'}></Card>
              <Card nombre={'Floki'} dueño={'Ari'} fecha={2023-08-25} hora={'16:15'} sintomas={'No esta comiendo'}></Card>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
