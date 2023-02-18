import React from "react";

// creating navbar function
function Navbar(){
    return(
        <nav className="navbar">
            <div>

            </div>
            <div className="nav-list">
                <ul className="list">
                    <li className="list-item">Rent</li>
                    <li className="list-item">Buy</li>
                    <li className="list-item">Sell</li>
                    <li className="list-item">Manage Property</li>
                    <li className="list-item">Resources</li>
                </ul>
            </div>
            <div className="button">
                <button className="btn">Login</button>
                <button className="btn">Sign up</button>
            </div>
        </nav>
    );
}

export default Navbar;