import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(0);
    const toggleSidebar = () => {
        setSidebarOpen(sidebarOpen == 0 ? 1 : 0);
    };
    return (
        <>
            <div
                className="sidebar"
                style={sidebarOpen ? { left: "0" } : { left: "-100%" }}
            ></div>
            <div className="navbar">
                <div className="navbarHamburger" onClick={toggleSidebar}>
                    <GiHamburgerMenu size={40} />
                </div>
                <div className="logo">LOGO</div>
                <div className="navbarLinks">
                    <a href="" className="navbarLink navActive">
                        Dashboard
                    </a>
                    <a href="" className="navbarLink">
                        Compete
                    </a>
                    <a href="" className="navbarLink">
                        Videos
                    </a>
                    <a href="" className="navbarLink">
                        About
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
