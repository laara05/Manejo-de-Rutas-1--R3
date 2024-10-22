import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Crear = ({ setTareas }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaTarea = {
            id: Date.now(),
           