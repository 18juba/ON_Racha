import React, { useState } from 'react';
import './styles.css';
import { useSideStore } from '../../../stores/sidebar';
import { Image } from 'react-bootstrap';

export let openSideBar = (state) => {

}

const Sidebar = () => {
    const { setISOpen, isOpen } = useSideStore()

    const toggleSidebar = () => {
        setISOpen(!isOpen);
    };

    return (
        <div className="app">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div style={{maxWidth: "188px"}}>
                	<Image src='./logo_prototype-removebg-preview-redimensioned-150.png' alt='logo' />
                </div>
                <ul>
                    <li className='ListItems'>
                        <img src='icons8-bola-de-futebol-2-40.png' className='ballIcon' alt='ballIcon' />
                        <a href="Signup" style={{ fontSize: "40px" }}>Jogos</a>
                    </li>
                    <li className='ListItems'>
                        <img src='icons8-loja-online-50.png' className='ballIcon' alt='storeIcon' />
                        <a href="/Login" style={{ fontSize: "30px" }}>Produtos</a>
                    </li>
                    <li className='ListItems'>
                        <img src='icons8-conta-de-teste-48.png' className='ballIcon' alt='profileiCon' />
                        <a href="Home" style={{ fontSize: "25px" }}>Perfil</a>
                    </li>
                    <li className='ListItems'>
                        <img src='icons8-configurações-48.png' className='ballIcon' alt='profileiCon' />
                        <a href="Home" style={{ fontSize: "19px" }}>Configurações</a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
