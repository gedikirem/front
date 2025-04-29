import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

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
    // Şifre eşleşme kontrolü
      if (userInfo.sifre !== userInfo.sifreTekrar) {
        alert("Şifreler eşleşmiyor!");
        return;
      }

      // Şifre uzunluğu kontrolü
      if (userInfo.sifre.length < 6) {
        alert("Şifre en az 6 karakter olmalıdır!");
        return;
      }

      // Telefon numarası formatı kontrolü
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Kullanıcı Kayıt</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input type="text" name="kullaniciAdi" placeholder="Kullanıcı Adı" value={userInfo.kullaniciAdi} onChange={handleChange} required className="border p-2 rounded" />
        <input type="date" name="dogumTarihi" placeholder="Doğum Tarihi" value={userInfo.dogumTarihi} onChange={handleChange} required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={userInfo.email} onChange={handleChange} required className="border p-2 rounded" />
        <input type="password" name="sifre" placeholder="Şifre" value={userInfo.sifre} onChange={handleChange} required className="border p-2 rounded" />
        <input type="password" name="sifreTekrar" placeholder="Şifre Tekrar" value={userInfo.sifreTekrar} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="telefon" placeholder="Telefon Numarası" value={userInfo.telefon} onChange={handleChange} required className="border p-2 rounded" />

        <button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded">
          Kayıt Ol
        </button>
      </form>

      <div className="mt-4">
        <button onClick={() => navigate("/login/Kullanıcı")} className="text-blue-600 hover:underline">
          Zaten hesabın var mı? Giriş yap
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
