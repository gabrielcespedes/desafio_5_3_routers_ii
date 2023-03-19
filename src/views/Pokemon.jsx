import { useState } from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";

const Pokemon = () => {
    const {id} = useParams();

    const endpoint2 = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [name, setName] = useState('');
    const [urlImg, setUrlImg] = useState('');

    useEffect(() => {
        dataStats()        
    }, [])

    const dataStats = async () => {
        const responseStats = await fetch(endpoint2);
        const dataStats = await responseStats.json();
        setData2([...dataStats.stats]);
        setData3([...dataStats.types]);
        setName(dataStats.name);
        setUrlImg(dataStats.sprites.other.dream_world.front_default);
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="card my-5 p-3" style={{width: '36rem'}}>
                <div className="card_interior">
                    <img src={urlImg} width="300" alt="figura"></img>                    
                    <div className="box2">
                        <h3>{name}</h3>
                        <ul>
                            {data2.map(
                                (element, index) => <li key={index}>{element.stat.name}: {element.base_stat}</li>                        
                            )}  
                        </ul>
                        {data3.map(
                            (element, index) => <p className="text-secondary" key={index}>{element.type.name}</p>
                        )}
                    </div>                                                                                                                                  
                </div>                
            </div>
        </div>                
    )
}

export default Pokemon;