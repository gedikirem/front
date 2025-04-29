import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginPageComponents.css";

const ChooseRegisterRole = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold mb-6">Kayıt Türünü Seçin</h1>

      <div className="buttonGroupShape">
        <button className="RoleButton" onClick={() => navigate("/register/Kullanıcı")}>
          Kullanıcı Kayıt
        </button>

        <button className="RoleButton" onClick={() => navigate("/register/Organizatör")}>
          Organizatör Kayıt
        </button>
      </div>
    </div>
  );
};

export default ChooseRegisterRole;
