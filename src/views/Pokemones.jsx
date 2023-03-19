import { useContext } from "react";
import MyContext from "../my_context";

const Pokemones = () => {
    const {data} = useContext(MyContext);

    return(
        <div className='container text-center'>
            <h2 className='my-3'>Selecciona un pokemón</h2>
            <div className="box">
                <select className="selector my-4">
                    <option selected="true" disables="disabled">Pokemones</option>
                    <option >pokemon 1</option>
                    <option>pokemon 2</option>
                </select>
                <button className="btn btn-dark button my-3">Ver Detalle</button>                              
            </div>
        </div>
    )
}

export default Pokemones;