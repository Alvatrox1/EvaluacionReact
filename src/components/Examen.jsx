import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Examen() {

    const [ preguntas, setPreguntas ] = useState([]);
    const [ respuestas, setRespuestas ] = useState([]);


    let endPoint = "http://localhost:3030";

    useEffect( () => {
        if ( preguntas == undefined && respuestas == undefined ) {
          
        }
        getPreguntas();
        getRespuestas();
       
        console.log("Respuestas Effect : ", respuestas);

    }, [ ])

    const getPreguntas = () => {
        axios.get( endPoint + "/getExamen").then( (response) => {
            console.log("Preguntas : ", response);
            setPreguntas(response.data.respuestas);
        }).catch( (error) => {
            console.log("Error", error);
        });
    }

    const getRespuestas = () => {
        axios.get( endPoint + "/getRespuestas").then( (response) => {
            setRespuestas( response.data.preguntas );
            console.log("Respuestas : ", respuestas);

        }).catch( (error) => {
            console.log("Error : ", error);
        });
    }

  return (
    <div>
        <h1> Examen </h1>
        <ul>
            {
              preguntas?.length &&
              preguntas.map( pregunta => {
                  <li> { pregunta } </li>
              })  
            }
        </ul>

        <div>
            <ul>
            { 
                respuestas?.length > 0 &&
                respuestas.map( respuesta => {
                    <li> { respuesta.res1 } </li>
                })       
            }
            </ul>
        </div>

    </div>
  )
}

export default Examen