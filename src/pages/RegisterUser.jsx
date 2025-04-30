import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "../components/RegisterUser.css";

const RegisterUser = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    kullaniciAdi: "",
    dogumTarihi: "",
    email: "",
    sifre: "",
    sifreTekrar: "",
    telefon: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.sifre !== userInfo.sifreTekrar) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    if (userInfo.sifre.length < 6) {
      alert("Şifre en az 6 karakter olmalıdır!");
      return;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(userInfo.telefon)) {
      alert("Telefon numarası geçersiz!");
      return;
    }
    
    try {
      await register(userInfo, "Kullanıcı");
    } catch (err) {
      alert("Kayıt başarısız!");
    }
  };

  return (
    <div className="register-background">
      <div className="background-imageR"></div>
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="content-box">
            <div className="register-content">
              <h1 className="register-title">Kullanıcı Kayıt</h1>

              <form onSubmit={handleSubmit} className="register-form">
                <input
                  type="text"
                  name="kullaniciAdi"
                  placeholder="Kullanıcı Adı"
                  value={userInfo.kullaniciAdi}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="date"
                  name="dogumTarihi"
                  placeholder="Doğum Tarihi"
                  value={userInfo.dogumTarihi}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="password"
                  name="sifre"
                  placeholder="Şifre"
                  value={userInfo.sifre}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="password"
                  name="sifreTekrar"
                  placeholder="Şifre Tekrar"
                  value={userInfo.sifreTekrar}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="telefon"
                  placeholder="Telefon Numarası"
                  value={userInfo.telefon}
                  onChange={handleChange}
                  required
                  className="register-input"
                />

                <button type="submit" className="register-button">
                  Kayıt Ol
                </button>
              </form>

              <div className="register-login-container">
                <p className="register-login-text">Hesabınız var mı?</p>
                <button 
                  onClick={() => navigate("/login/Kullanıcı")}
                  className="register-login-button"
                >
                  <span className="button-icon">→</span>
                  <span>Giriş Yap</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-imageR"></div>
    </div>
  );
};

export default RegisterUser;