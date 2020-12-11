import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Navbar'
import Tareas from '../tareas/Tareas';
// Redux
import { useSelector, useDispatch } from 'react-redux';

const Dasboard = () => {
    const dispatch = useDispatch();
    const tareas = useSelector(state => state.tareas.tareas);

    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <h1>Tareas</h1>
                    <Tareas tareas={tareas} />
                </main>
            </div>
        </div>
    );
}

export default Dasboard;