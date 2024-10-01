import React, { useState } from 'react';
import './styles.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Estado para controlar a visibilidade da sidebar

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="app">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <img src='icons8-soccer-ball-50.png' alt='ballIcon' />
                        <a href="Signup" style={{ fontSize: "50px" }}>Jogos</a>
                    </li>
                    <li>
                        <img src='icons8-championship-50.png' alt='ChampIcon' />
                        <a href="/" style={{ fontSize: "25px" }}>Campeonatos</a>
                    </li>
                    <li>
                        <a href="Home" style={{ fontSize: "50px" }}>Home</a>
                    </li>
                </ul>
            </div>
            <img className='toggle-button' src='sidebar-4-16.png' alt='sidebar' onClick={toggleSidebar} />
            {/* <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Esconder' : 'Mostrar'} Menu
      </button> */}
        </div>
    );
};

export default Sidebar;
