import TareasAcciones from '../tareas/TareasAcciones';


const Sidebar = () => {
    return (
        <aside>
            <h1>Tareas<span>Admin</span></h1>
            <div className="proyectos">
                <h2>Acciones</h2>
                <TareasAcciones />
            </div>
        </aside>
    );
}

export default Sidebar;