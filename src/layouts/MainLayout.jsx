import React from 'react';
import "../components/background.css";
import png1 from "../assets/z--1.png";
import png2 from "../assets/z-1.png";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    return (
        <div className="background">
            <img src={png1} alt="Background PNG" className="background-image" />
            <div className="main-container">
                <div className="gradient-border">
                    <Header/>
                    <Outlet /> {/* Buraya alt route'lardan gelen içerik basılacak */}
                </div>
                <img src={png2} alt="Foreground PNG" className="overlay-image" />
            </div>
        </div>
    );
};

export default MainLayout;
