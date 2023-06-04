import logo from './logo.svg';
import './App.css';
import './index.css'
import Formulario from './Formulario';
import Citas from './Citas';
import useState from 'react'
function App() {
  const [citas, setCitas] = useState([]);



  return (
    <div className="container">
      <h1>Administrar Citas</h1>
      <div className="row">
        <Formulario setCitas={setCitas} citas={citas} />
        <Citas citas={citas} />
      </div>
    </div>
  );
};


export default App;
