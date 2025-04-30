import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import "../components/Login.css"
;

const Login = () => {
  const { login } = useAuth();
  const { role } = useParams();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(emailOrUsername, password, role);
    } catch (err) {
      alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <div className="login-background">
      <div className="background-imageL"></div>
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="content-box">
            <div className="login-content">
              <h1 className="login-title">{role} Girişi</h1>

              <form onSubmit={handleSubmit} className="login-form">
                <input
                  type="text"
                  placeholder={role === "Kullanıcı" ? "Kullanıcı Adı" : "Email"}
                  value={emailOrUsername}
                  required
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="login-input"
                />

                <input
                  type="password"
                  placeholder="Şifre"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                />
                
                <button type="submit" className="login-submit-btn">
                  Giriş Yap
                </button>

                <div className="login-links-container">
                  <button
                    type="button"
                    onClick={() => navigate("/choose-register")}
                    className="login-register-button"
                  >
                    <span className="button-icon">→</span>
                    <span>Hesabın yok mu? Kayıt ol</span>
                  </button>
                  <button
                    type="button"
                    className="login-forgot-button"
                    onClick={() => alert("Şifremi unuttum işlemi henüz yapılmadı.")}
                  >
                    Şifremi unuttum
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-imageL"></div>
    </div>
  );
};

export default Login;