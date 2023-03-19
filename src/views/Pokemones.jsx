import { useContext, useState } from "react";
import MyContext from "../my_context";

import { useNavigate } from "react-router-dom";

const Pokemones = () => {

    const [id, setId] = useState(1);

    const navigate = useNavigate();

    const irAPokemon = () => {
        navigate(`/pokemones/${id}`);
    }
    
    const {data} = useContext(MyContext);

    return(
        <div className='container text-center'>
            <h2 className='my-3'>Selecciona un pokemón</h2>
            <div className="box">
                <select onChange={(e) => setId(e.target.value)} className="selector my-4">
                    <option selected={true} disables={"disabled"}>Pokemones</option>
                    {data.map(
                        (element, index) => <option key={index} value={index+1}>{element.name}</option>                        
                    )}
                </select>
                <button onClick={irAPokemon} className="btn btn-dark button my-3">Ver Detalle</button>                              
            </div>
        </div>
    )
}

export default Pokemones;