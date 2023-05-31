import './index.css';


const Citas = ({ citas }) => {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <div className="cita" key={index}>
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.nombre}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Síntomas: <span>{cita.sintomas}</span></p>
          <button className="button eliminar u-full-width">Eliminar ×</button>
        </div>
      ))}
    </div>
  );
};


export default Citas;