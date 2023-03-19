import location from '../location.png';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const setActivateClass = ({isActive}) => (isActive ? "active": "text-decoration-none text-light mx-1");

    return(
        <div className='navbar bg-secondary'>
            <div className='container'>
                <div className='navbar-brand'>
                    <img src={location} width="30" alt='logo'></img>
                </div>
                <div>
                    <NavLink className={setActivateClass} to="/">Home</NavLink>
                    <NavLink className={setActivateClass} to="/pokemones">Pokemones</NavLink>
                </div>
                
            </div>                       
        </div>
    )
}

export default Navbar;