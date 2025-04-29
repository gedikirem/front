import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Router için Link kullandık
import axios from "axios";

import "./Header.css";
import logo from "../assets/E-Tix LOGO.png";
import profileIcon from "../assets/user.png";
import mapIcon from "../assets/map.png";

const Header = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Şehir Seç");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [searchText, setSearchText] = useState(""); // Şu anlık dursun

  // Şehirleri backend'den çek
  useEffect(() => {
    axios.get('http://localhost:8080/api/cities') // BACKEND CITIES ENDPOINT
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Şehirleri çekerken hata oluştu:', error);
      });
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1 className="site-name">E-TİX LOGO</h1>

        <div
          className="location-selector"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="location-labels">
            <span className="konum">Konum</span>
            <span className="sehir">{selectedCity}</span>
          </div>
          <img src={mapIcon} alt="Map Icon" className="map-icon" />
          {dropdownOpen && (
            <div className="dropdown">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCity(city.name); // city.name backend'e göre uyarlanır
                    setDropdownOpen(false);
                  }}
                >
                  {city.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="nav-menu">
        <Link to="/sinema" className="nav-item">Sinema</Link>
        <Link to="/bale" className="nav-item">Bale</Link>
        <Link to="/tiyatro" className="nav-item">Tiyatro</Link>
        <Link to="/konferans" className="nav-item">Konferans</Link>
        <Link to="/spor" className="nav-item">Spor</Link>
      </nav>

      <div className="header-right">
        <input
          type="text"
          placeholder="Tiyatro, Sinema, Konferans ara..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to="/profil">
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
