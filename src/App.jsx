import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
