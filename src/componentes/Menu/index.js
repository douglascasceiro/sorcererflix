import React from 'react';
import Logo from '../../assets/imagens/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu(props) 
{
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo SorcererFlix"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>

        </nav>
    );
}

export default Menu;