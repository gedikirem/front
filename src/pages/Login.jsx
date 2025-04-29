import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const { role } = useParams(); // URL'den admin/user/organizer bilgisi geliyor
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6 capitalize">{role} Girişi</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder={role === "Kullanıcı" ? "Kullanıcı Adı" : "Email"}
          value={emailOrUsername}
          required
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded"
        >
          Giriş Yap
        </button>

        <div className="mt-4 flex flex-col items-center gap-2">
          <button
            onClick={() => navigate("/choose-register")}
            className="text-green-600 hover:underline"
          >
            Hesabın yok mu? Kayıt ol
          </button>
          <button
            className="text-red-500 hover:underline"
            onClick={() => alert("Şifremi unuttum işlemi henüz yapılmadı.")}
          >
            Şifremi unuttum
          </button>
        </div>

      </form>
    </div>
  );
};

export default Login;
