
import React, { useState } from 'react';
import axios from 'axios';
// TODO: Implementar un formulario con los siguientes campos: nombre, estado civil, y fecha de nacimiento.  Usar el metodo POST /add del back.
function Encuesta() {

    const [datos, setDatos]=useState({nombre:'',estadoCivil:'',fechaDeNacimiento:''});
    const onChange = ({target}:any)=>{
        setDatos({...datos,[target.name]:target.value});
        console.log(datos);
    };

    const onSubmit = () => {
        axios
          .post('localhost:8080/encuesta/add', datos)
          .then(result => {
            console.log(result);
            debugger;
          })
          .catch(e => console.log(e));
    };    


    return (
        <div>
            <h1>Registrar nueva encuesta</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" placeholder="nombre" onChange={onChange}></input>

                <label htmlFor="fechaDeNacimiento">Fecha de Nacimiento</label>
                <input
                    id="fechaDeNacimiento"
                    name="fechaDeNacimiento"
                    placeholder="fechaDeNacimiento"
                    type="date"
                    onChange={onChange}
                ></input>
                <label htmlFor="estadoCivil">Estado civil</label>
                <select
                    id="estadoCivil"
                    name="estadoCivil"
                    onChange={onChange}
                >
                    <option disabled>
                        seleccione una opcion
                    </option>
                    <option
                        id="Soltero"
                    >
                        Soltero
                    </option>
                    <option
                        id="Casado"
                    >
                        Casado
                    </option>
                    <option
                        id="Viudo"
                    >
                        Viudo
                    </option>
                    <option
                        id="Divorciado"
                    >
                        Divorciado
                    </option>


                </select>
                <button type="submit">Submit</button>

            </form>






        </div>
    );
}

export default Encuesta;