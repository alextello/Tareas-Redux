import { Fragment, useState } from "react";
import Modal from '../shared/Modal';
import Swal from 'sweetalert2'
// Redux
import { useDispatch } from 'react-redux';
import { editarTareaAction, setTareaEditar, borrarTareaAction } from '../../actions/tareasAction';

const Tarea = ({ tarea }) => {
    const [tareaState, setTarea] = useState({ ...tarea })
    const [stateModal, setStateModal] = useState(false);

    const estado = tarea.estado === 'pendiente' ? 'incompleto' : 'completo';

    const mostrarModal = () => {
        setStateModal(true);
        dispatch(setTareaEditar(tarea))
    }

    const cerrarModal = () => {
        setStateModal(false);
        dispatch(setTareaEditar(null))
    };

    // Redux
    const dispatch = useDispatch();

    // Acciones de usuario

    const cambiarEstado = () => {
        if (tarea.estado === 'pendiente') {
            tarea.estado = 'completada';
        } else {
            tarea.estado = 'pendiente'
        }
        dispatch(editarTareaAction(tarea))
    }

    const handleEliminar = () => {
        Swal.fire({
            title: 'Esta seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarTareaAction(tarea.id))
            }
        })
    }

    // Acciones modal

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redux
        dispatch(editarTareaAction(tareaState))
        cerrarModal();
    }

    const handleChange = (e) => {
        setTarea({
            ...tareaState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <li className="tarea sombra">
                <p>
                    {tarea.nombre}
                </p>
                <div className="estado">
                    <button type="button" className={estado} onClick={cambiarEstado}>{estado}</button>
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                        onClick={mostrarModal}
                    >
                        Ver
                </button>
                    <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={handleEliminar}
                    >
                        Eliminar
                </button>
                </div>
            </li>
            <Modal show={stateModal} cierreModal={cerrarModal}>
                <form className="formulario-tarea" onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={tareaState.nombre}
                        className="input-text"
                        onChange={handleChange}
                    />
                    <label>Descripcion:</label>
                    <input
                        name="descripcion"
                        type="text"
                        value={tareaState.descripcion}
                        className="input-text"
                        onChange={handleChange} />
                    <button type="submit" className="btn btn-primario btn-modal">Guardar</button>
                    <button type="button" className="btn btn-secundario btn-modal" onClick={cerrarModal}>Cerrar</button>
                </form>
            </Modal>
        </Fragment>
    );
}

export default Tarea;