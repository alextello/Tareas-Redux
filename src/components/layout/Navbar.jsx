import { useSelector } from 'react-redux';

const Navbar = () => {
    const tareas = useSelector(state => state.tareas.tareas);
    return (
        <header className="app-header">
            <p className="nombre-usuario">Dashboard <span>tareas</span></p>
            <nav className="nav-principal conteo">
                <p>Conteo de tareas: <span>{tareas.length}</span></p>
            </nav>
        </header>
    );
}

export default Navbar;