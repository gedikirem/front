import React from 'react';
import "../components/LoginBackground.css";
import png1 from "../assets/z--1L.png";
import png2 from "../assets/z-1L.png";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const LoginLayout = ({ children }) => {
    return (
        <div className="loginBackground">
            <img src={png1} alt="Background PNG" className="background-imageL" />
            <div className="outer-circle">
                <div className="inner-circle">
                    <div className="content-box">
                        <Outlet /> {/* Buraya alt route'lardan gelen içerik basılacak */}
                    </div>
                </div>
            </div>
            <img src={png2} alt="Foreground PNG" className="overlay-imageL" />
        </div>
    );
};

export default LoginLayout;
