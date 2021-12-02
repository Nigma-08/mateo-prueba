import axios from 'axios';
import React, { useEffect, useState } from 'react';
//TODO: Implementar una tabla que muestre todos los datos de las encuestas enviadas. Usar el metodo GET /all del back.
function HistorialEncuestas() {

    const [datos, setDatos] = useState({

        nombre: '',
        estadoCivil: '',
        fechaDeNacimiento: ''
    });
    const get = axios.get('localhost:8080/encuesta/all').then(result => result.data);
    useEffect(() => {
        let isMounted = true;
        get.then(data => {
            if (isMounted) setDatos(data);
        });
        return () => {
            isMounted = false;
        };
        console.log(datos)
    }, []);

    return (
        <div>
            <h2>Resultado Encuestas</h2>
            <table >
                <tr>
                    <th> Nombre </th>
                    <th> Estado Civil </th>
                    <th> Fecha de nacimiento </th>

                </tr>
                <tr>
                    <td> datos nombre </td>
                    <td> datos estado civil </td>
                    <td> datos fecha </td>
                </tr>
            </table>
        </div>
    );
}

export default HistorialEncuestas;