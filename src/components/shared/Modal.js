
const Modal = ({ cierreModal, show, children }) => {
    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHide}>
            <section className="modal-main">
                <div className="contenedor-modal">
                    {children}
                </div>
            </section>
        </div>
    );
};
export default Modal;