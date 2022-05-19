import React from 'react'
import '../styles/style.css'
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return <header>
        <h1><div className='logo'>1</div>Coin</h1>
        <nav>
            <button className='button lb'><NavLink to='/converter'>Converter</NavLink></button>
            <button className='button rb'><NavLink to='/portfolio'>Portfolio</NavLink></button>
        </nav>
    </header>
}

export default Header