import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(0);
    const openSidebar = () => {
        setSidebarOpen(1);
    };
    const closeSidebar = () => {
        setSidebarOpen(0);
    };
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="navbar">
                <div className="navbarHamburger" onClick={openSidebar}>
                    <GiHamburgerMenu size={40} />
                </div>
                <div className="logo">ENDURE</div>
                <div className="navbarLinks">
                    <NavLink
                        to="/dashboard"
                        className={
                            active == 1 ? "navbarLink navActive" : "navbarLink"
                        }
                        onClick={() => {
                            setActive(1);
                            closeSidebar();
                        }}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/diet"
                        className={
                            active == 2 ? "navbarLink navActive" : "navbarLink"
                        }
                        onClick={() => {
                            setActive(2);
                            closeSidebar();
                        }}
                    >
                        Diet
                    </NavLink>
                    <NavLink
                        to="/tutorials"
                        className={
                            active == 3 ? "navbarLink navActive" : "navbarLink"
                        }
                        onClick={() => {
                            setActive(3);
                            closeSidebar();
                        }}
                    >
                        Tutorials
                    </NavLink>
                    <NavLink
                        to="/community"
                        className={
                            active == 4 ? "navbarLink navActive" : "navbarLink"
                        }
                        onClick={() => {
                            setActive(4);
                            closeSidebar();
                        }}
                    >
                        Community
                    </NavLink>
                </div>
            </div>
            <div
                className="sidebar"
                style={{ left: sidebarOpen ? "0%" : "-100%" }}
            >
                <NavLink
                    to="/dashboard"
                    className={
                        active == 1 ? "navbarLink navActive" : "navbarLink"
                    }
                    onClick={() => setActive(1)}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/diet"
                    className={
                        active == 2 ? "navbarLink navActive" : "navbarLink"
                    }
                    onClick={() => setActive(2)}
                >
                    Diet
                </NavLink>
                <NavLink
                    to="/tutorials"
                    className={
                        active == 3 ? "navbarLink navActive" : "navbarLink"
                    }
                    onClick={() => setActive(3)}
                >
                    Tutorials
                </NavLink>
                <NavLink
                    to="/community"
                    className={
                        active == 4 ? "navbarLink navActive" : "navbarLink"
                    }
                    onClick={() => setActive(4)}
                >
                    Community
                </NavLink>
                <div className="sidebarClose">
                    <IoMdClose size={40} onClick={closeSidebar} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
