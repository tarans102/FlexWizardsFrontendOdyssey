import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(1);
    const openSidebar = () => {
        setSidebarOpen(1);
    };
    const closeSidebar = () => {
        setSidebarOpen(0);
    };
    return (
        <>
            <div className="navbar">
                <div className="navbarHamburger" onClick={openSidebar}>
                    <GiHamburgerMenu size={40} />
                </div>
                <div className="logo">LOGO</div>
                <div className="navbarLinks">
                    <a href="/dashboard" className="navbarLink navActive">
                        Dashboard
                    </a>
                    <a href="/diet" className="navbarLink">
                        Diet
                    </a>
                    <a href="/tutorials" className="navbarLink">
                        Tutorials
                    </a>
                    <a href="/community" className="navbarLink">
                        Community
                    </a>
                </div>
            </div>
            <div
                className="sidebar"
                style={{ left: sidebarOpen ? "0%" : "-100%" }}
            >
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
                <div className="sidebarClose">
                    <IoMdClose size={40} onClick={closeSidebar} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
