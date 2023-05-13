import React from 'react'
import './index.css'

const Header = () => {
    let logado = false;
    let nome = "Gleidson"

    return(
        <>
            <header>
                <nav>
                    <div className='logo'>
                        LOGO
                    </div>
                    { logado &&
                        <div className='perfil'>
                            <h5>Bem vindo(a) {nome}</h5>
                        </div>
                    }
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="/portifolio">Portifólio</a>
                        </li>
                        <li>
                            <a href="/Produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="/contatos">Contatos</a>
                        </li>
                    </ul>
                </nav>
                <h6>&copy; Todos os direitos reservados.</h6>
            </header>
        </>
    );
}

export default Header;