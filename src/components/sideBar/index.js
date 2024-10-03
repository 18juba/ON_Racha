import React, { useState } from 'react';
import './styles.css';
import { useSideStore } from '../../../stores/sidebar';

export let openSideBar = (state) => {

}

const Sidebar = () => {
    const {setISOpen, isOpen} = useSideStore()

    const toggleSidebar = () => {
        setISOpen(!isOpen);
    };

    return (
        <div className="app">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <img src='icons8-soccer-ball-48.png' alt='ballIcon' />
                        <a href="Signup" style={{ fontSize: "50px" }}>Jogos</a>
                    </li>
                    <li>
                        <img src='icons8-championship-50.png' alt='ChampIcon' />
                        <a href="/Login" style={{ fontSize: "25px" }}>Campeonatos</a>
                    </li>
                    <li>
                        <a href="Home" style={{ fontSize: "50px" }}>Home</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
