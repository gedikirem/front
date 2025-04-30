import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "../components/RegisterOrganizator.css";

const RegisterOrganizer = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [organizerInfo, setOrganizerInfo] = useState({
    kullaniciAdi: "",
    tcKimlikNo: "",
    vergiNo: "",
    sifre: "",
    sifreTekrar: "",
    email: "",
    telefon: "",
    sirketAdres: "",
    iban: "",
  });

  const handleChange = (e) => {
    setOrganizerInfo({ ...organizerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (organizerInfo.sifre !== organizerInfo.sifreTekrar) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    if (organizerInfo.sifre.length < 6) {
      alert("Şifre en az 6 karakter olmalıdır!");
      return;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(organizerInfo.telefon)) {
      alert("Telefon numarası geçersiz!");
      return;
    }

    const taxNumberRegex = /^\d{10}$/;
    if (!taxNumberRegex.test(organizerInfo.vergiNo)) {
      alert("Vergi numarası 10 haneli olmalıdır ve sadece rakamlardan oluşmalıdır!");
      return;
    }

    const ibanRegex = /^TR\d{24}$/;
    if (!ibanRegex.test(organizerInfo.iban)) {
      alert("IBAN geçersiz. Örnek: TR000000000000000000000000");
      return;
    }
    
    try {
      await register(organizerInfo, "Organizatör");
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
              <h1 className="register-title">Organizatör Kayıt</h1>

              <form onSubmit={handleSubmit} className="register-form">
                <input
                  type="text"
                  name="kullaniciAdi"
                  placeholder="Kullanıcı Adı"
                  value={organizerInfo.kullaniciAdi}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="tcKimlikNo"
                  placeholder="T.C. Kimlik No"
                  value={organizerInfo.tcKimlikNo}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="vergiNo"
                  placeholder="Vergi Numarası"
                  value={organizerInfo.vergiNo}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="password"
                  name="sifre"
                  placeholder="Şifre"
                  value={organizerInfo.sifre}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="password"
                  name="sifreTekrar"
                  placeholder="Şifre Tekrar"
                  value={organizerInfo.sifreTekrar}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={organizerInfo.email}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="telefon"
                  placeholder="Telefon Numarası"
                  value={organizerInfo.telefon}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="sirketAdres"
                  placeholder="Şirket Adresi"
                  value={organizerInfo.sirketAdres}
                  onChange={handleChange}
                  required
                  className="register-input"
                />
                
                <input
                  type="text"
                  name="iban"
                  placeholder="IBAN (TR...)"
                  value={organizerInfo.iban}
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
                  onClick={() => navigate("/login/Organizatör")}
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

export default RegisterOrganizer;