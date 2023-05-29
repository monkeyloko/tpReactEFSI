import React, { useState } from 'react'
import './index.css';

const Formulario = ({onTomarDatos}) => {

    const [mascota, setMascota] = useState('');
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const data = {
        mascota: mascota,
        nombre: nombre,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    }


   const tomarValores= (e)=>{
    e.preventDefault();
    onTomarDatos(data)

   }
return (
    <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={tomarValores}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"
                     value="" onChange={(e)=>setMascota(e.target.value)}/>
                     <label>Nombre Dueño</label>
                     <input type="text" name="propietario" className="u-full-width"
                     placeholder="Nombre dueño de la mascota" value="" onChange={(e)=>setNombre(e.target.value)}/>
                     <label>Fecha</label><input type="date" name="fecha"
                     className="u-full-width" value="" onChange={(e)=>setFecha(e.target.value)}/>
                     <label>hora</label>
                     <input type="time" name="hora" className="u-full-width"
                     value="" onChange={(e)=>setHora(e.target.value)}/>
                     <label>Sintomas</label>
                     <textarea name="sintomas" className="u-full-width" onChange={(e)=>setSintomas(e.target.value)}></textarea>
                     <button type="submit"
                      className="u-full-width button-primary">Agregar Cita</button>
                </form>
        </div>
);

}

export default Formulario;