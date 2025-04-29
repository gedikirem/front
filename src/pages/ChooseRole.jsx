import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginPageComponents.css";

const ChooseRole = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-bold mb-6">Giriş Türünü Seçin</h1>

            <div className="buttonGroupShape">
                <button className="RoleButton" onClick={() => navigate("/login/Admin")}>
                    Admin Girisi
                </button>

                <button className="RoleButton" onClick={() => navigate("/login/Kullanıcı")}>
                    Kullanıcı Girisi
                </button>

                <button className="RoleButton" onClick={() => navigate("/login/Organizatör")}>
                    Organizatör Girisi
                </button>
            </div>
        </div>
    );
};

export default ChooseRole;
