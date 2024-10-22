import React from 'react';
import { useParams } from 'react-router-dom';

const Detalle = ({ tareas }) => {
    const { id } = useParams();
    const tarea = tareas.find(t => t.id === parseInt(id));

    return (
        <div>
            <h1>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
            <p>Fecha de Creación: {tarea.fechaCreacion.toLocaleDateString()}</p>
            <p>Estado: {tarea.estado ? "Completa" : "Incompleta"}</p>
        </div>
    );
};

export default Detalle;