import logo from './logo.svg';
import './App.css';
import './index.css'
import Formulario from './Formulario';
import Citas from './Citas';
import useState from 'react'
function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = (data) => {
    // Crear una nueva cita con los datos del formulario
    const nuevaCita = {
      mascota: data.mascota,
      nombre: data.nombre,
      fecha: data.fecha,
      hora: data.hora,
      sintomas: data.sintomas,
    };

    // Agregar la nueva cita al estado de citas
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="container">
      <h1>Administrar Citas</h1>
      <div className="row">
        <Formulario onTomarDatos={crearCita} />
        <Citas citas={citas} />
      </div>
    </div>
  );
};


export default App;
