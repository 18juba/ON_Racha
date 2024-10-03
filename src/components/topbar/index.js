// src/Topbar.js
import React from 'react';
import './Topbar.css';
import { useUserStore } from '../../../stores/usersStore';
import { useUser } from '../../../contexts/useContext';
import { useSideStore } from '../../../stores/sidebar';


function Topbar() {
  const { user } = useUser()
  const {setISOpen, isOpen} = useSideStore()
  const {entity} = useUserStore()
  console.log(entity)

  return (
    <div className={`topbar${isOpen? "": "-extend"}`}>
      <div className="logo">
        <img className='toggle-button' src={isOpen? 'icons8-ocultar-sidepanel-32.png' : 'icons8-mostrar-sidepanel-32.png'} alt='sidebar' onClick={() => setISOpen(!isOpen)} />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/Message"><img src='icons8-mensagem-32.png' alt='messaceIco' /></a>
          </li>
          <li>
            <img src='icons8-mais-ou-menos-32.png' alt='byeIcon' />
          </li>
          <li>
            <a>Olá, {user.name || "Usuario"}</a>
          </li>
          <li>
            <a href="/Profile">
              <img src='icons8-nome-32.png' alt='profileiCon' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
