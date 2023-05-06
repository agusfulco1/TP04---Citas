import './App.css';
import Form from '../Form/Form.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row align-items-start">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Form></Form>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
