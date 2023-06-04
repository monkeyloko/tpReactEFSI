import React, { useState } from 'react'
import './index.css';



function Formulario({ setCitas, citas }) {
    const [contador, setContador] = useState(0);
    const agregarMascota = (e) => {
        e.preventDefault();
        setContador(contador + 1);

        setCitas([
            ...citas,
            {
                id: contador,
                nombre: e.target.mascota.value,
                propietario: e.target.propietario.value,
                fecha: e.target.fecha.value,
                hora: e.target.hora.value,
                sintomas: e.target.sintomas.value
            }
        ])

    }


    return (
        <form onSubmit={agregarMascota}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"></input>

            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"></input>

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"></input>

            <label>hora</label>
            <input type="time" name="hora" className="u-full-width"></input>

            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
}
export default Formulario;