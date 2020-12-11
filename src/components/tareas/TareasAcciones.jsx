import Modal from '../shared/Modal';
import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { crearNuevaTareaAction } from '../../actions/tareasAction';
import Swal from 'sweetalert2'

const TareasAcciones = () => {
    // Redux
    const dispatch = useDispatch();
    const [stateModal, setStateModal] = useState(false);
    const [tarea, setTarea] = useState({
        nombre: '',
        descripcion: ''
    });

    const mostrarModal = () => {
        setStateModal(true);
    }

    const cerrarModal = () => {
        setStateModal(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (tarea.nombre.trim() === '' || tarea.descripcion.trim() === '') {
            Swal.fire({
                title: 'Ambos campos son obligatorios',
                icon: 'error'
            })
            return;
        }
        dispatch(crearNuevaTareaAction(tarea))
        cerrarModal();
        setTarea({
            nombre: '',
            descripcion: '',
        })
    }

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <button className="btn btn-primario" onClick={mostrarModal}>Agregar tarea</button>
            <Modal show={stateModal} cierreModal={cerrarModal}>
                <form className="formulario-tarea" onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={tarea.nombre}
                        className="input-text"
                        onChange={handleChange}
                    />
                    <label>Descripcion:</label>
                    <input
                        name="descripcion"
                        type="text"
                        value={tarea.descripcion}
                        className="input-text"
                        onChange={handleChange} />
                    <button type="submit" className="btn btn-primario btn-modal">Guardar</button>
                    <button type="button" className="btn btn-secundario btn-modal" onClick={cerrarModal}>Cerrar</button>
                </form>
            </Modal>
        </Fragment>
    );
}

export default TareasAcciones;