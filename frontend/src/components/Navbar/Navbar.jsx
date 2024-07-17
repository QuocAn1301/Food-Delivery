import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    //gán setMenu cho menu để rồi xuống dưới check coi có active không nếu có thì thực hiện css
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
                <li onClick={() => setMenu("menu-app")} className={menu === "menu-app" ? "active" : ""}> menu app</li >
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}> contact us</li >
            </ul >
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-seach-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div >

    )
}

export default Navbar
