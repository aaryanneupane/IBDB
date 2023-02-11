import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg shadow-md py-5 px-10 bg-bigBoy relative flex items-center w-full justify-between">
            <button>
                <Link to="/" className="px-5 py-2 rounded-lg bg-kulTheme dark:hover:bg-rose-500 font-serif text-3xl shadow" >IBDb</Link>
            </button>
            <button>
                <Link to="/" className="px-5 py-2 rounded-lg bg-hvit shadow" >Meny</Link>
            </button>
            <input
                type="text"
                className="block w-2/3 px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."/>
            <button>
                <Link to="/" className="px-5 py-2 rounded-lg bg-hvit shadow" >Filter</Link>
            </button>
            <button>
                <Link to="/" className="px-5 py-2 rounded-lg bg-hvit shadow" >Profile</Link>
            </button>

        </div>
    )
}

export default Header;