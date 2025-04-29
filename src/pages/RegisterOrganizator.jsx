import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

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
    // Şifre eşleşme kontrolü
      if (organizerInfo.sifre !== organizerInfo.sifreTekrar) {
        alert("Şifreler eşleşmiyor!");
        return;
      }

      // Şifre uzunluğu kontrolü
      if (organizerInfo.sifre.length < 6) {
        alert("Şifre en az 6 karakter olmalıdır!");
        return;
      }

      // Telefon numarası formatı kontrolü
      const phoneRegex = /^\d{10,15}$/;
      if (!phoneRegex.test(organizerInfo.telefon)) {
        alert("Telefon numarası geçersiz!");
        return;
      }

      // Vergi numarası formatı kontrolü
      const taxNumberRegex = /^\d{10}$/;
      if (!taxNumberRegex.test(organizerInfo.vergiNo)) {
        alert("Vergi numarası 10 haneli olmalıdır ve sadece rakamlardan oluşmalıdır!");
        return;
      }

      // IBAN formatı kontrolü
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Organizatör Kayıt</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input type="text" name="kullaniciAdi" placeholder="Kullanıcı Adı" value={organizerInfo.kullaniciAdi} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="tcKimlikNo" placeholder="T.C. Kimlik No" value={organizerInfo.tcKimlikNo} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="vergiNo" placeholder="Vergi Numarası" value={organizerInfo.vergiNo} onChange={handleChange} required className="border p-2 rounded" />
        <input type="password" name="sifre" placeholder="Şifre" value={organizerInfo.sifre} onChange={handleChange} required className="border p-2 rounded" />
        <input type="password" name="sifreTekrar" placeholder="Şifre Tekrar" value={organizerInfo.sifreTekrar} onChange={handleChange} required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={organizerInfo.email} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="telefon" placeholder="Telefon Numarası" value={organizerInfo.telefon} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="sirketAdres" placeholder="Şirket Adresi" value={organizerInfo.sirketAdres} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="iban" placeholder="IBAN" value={organizerInfo.iban} onChange={handleChange} required className="border p-2 rounded" />

        <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded">
          Kayıt Ol
        </button>
      </form>

      <div className="mt-4">
        <button onClick={() => navigate("/login/Organizatör")} className="text-blue-600 hover:underline">
          Zaten hesabın var mı? Giriş yap
        </button>
      </div>
    </div>
  );
};

export default RegisterOrganizer;
