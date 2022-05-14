import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><div className="navbar__first">HOME</div></Link>
            <div className="navbar__last">
                <ul>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
