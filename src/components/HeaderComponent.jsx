import "./HeaderComponent.css";

function HeaderComponent(){
    return(
        <header className="header">
            <h1 className="title">Mateo Castro Souto</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Experiencia</a></li>
                    <li><a href="#">Habilidades</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent;