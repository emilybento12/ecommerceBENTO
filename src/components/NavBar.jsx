import React from "react";
import { Link } from "react-router-dom"; 


function NavBar() {
    return (
        <nav>
            <ul className="navbar">
               
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;

