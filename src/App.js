import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import { Fragment, useState } from "react";

function App() {
  //En react los valores fluyen del padre al hijo
  //Definimos el state del componente
  const [cantidad, guardarCantidad] = useState(0);
  const [ plazo, guardarPlazo ] = useState('');
  const [ total, guardarTotal ] = useState(0);
  const [ cargando, guardarCargando ] = useState(false);

  let componente;
  if(cargando){
    componente = <Spinner />;
  }else if(total === 0){
    componente = < Mensaje />;
  }else{
    componente = <Resultado 
    total={total} 
    plazo={plazo} 
    cantidad={cantidad} 
    />;
  }

  return (
    <Fragment>
       <Header 
          titulo="Cotizador de prestamos"  
       />


       <div className="container">
          <Formulario 
              cantidad={cantidad}
              guardarCantidad={guardarCantidad}
              plazo={plazo}
              guardarPlazo={guardarPlazo}
              total={total}
              guardarTotal={guardarTotal}
              guardarCargando={guardarCargando}
          />
          <div className="mensajes">
              { componente }
          </div>
          
       </div>

       
    </Fragment>
  );
}

export default App;
