import { Fragment } from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareas, tipo }) => {
    const tareasPendientes = tareas.filter(tarea => tarea.estado === 'pendiente');
    const tareasCompletadas = tareas.filter(tarea => tarea.estado === 'completada');
    return (
        <Fragment>
            <div className="row">
                <div className="column">
                    <div className="tareas">
                        <h3>Tareas pendientes</h3>
                        <ul className="listado-tareas">
                            {tareasPendientes ?
                                tareasPendientes.map((tarea, i) => (
                                    <Tarea tarea={tarea} key={i} />
                                ))
                                :
                                null
                            }
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="tareas">
                        <h3>Tareas finalizadas</h3>
                        <ul className="listado-tareas">
                            {tareasCompletadas ?
                                tareasCompletadas.map((tarea, i) => (
                                    <Tarea tarea={tarea} key={i} />
                                ))
                                :
                                null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tareas;