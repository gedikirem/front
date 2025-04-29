import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import MainLayout from "./layouts/MainLayout";  // MainLayout'ı import ettik
import LoginLayout from "./layouts/LoginLayout";
import Home from "./pages/Home";  // Sayfaları import et
import Sinema from "./pages/Sinema";
import Bale from "./pages/Bale";
import Tiyatro from "./pages/Tiyatro";
import Konferans from "./pages/Konferans";
import Spor from "./pages/Spor";
import Profil from "./pages/Profil";
import ChooseRole from "./pages/ChooseRole";
import Login from "./pages/Login";
import ChooseRegisterRole from "./pages/ChooseRegisterRole";
import RegisterUser from "./pages/RegisterUser";
import RegisterOrganizator from "./pages/RegisterOrganizator";

function App() {
  return (
     <Router>
        <AuthProvider>

          <Routes>
            {/* LoginLayout altında toplanan sayfalar */}
            <Route path="/" element={<LoginLayout />}>
              <Route path="login/:role" element={<Login />} />
              {/*<Route path="register" element={<Register />} />*/}
              <Route path="chooserole" element={<ChooseRole />} />
              <Route path="/choose-register" element={<ChooseRegisterRole />} />
              <Route path="/register/Kullanıcı" element={<RegisterUser />} />
              <Route path="/register/Organizatör" element={<RegisterOrganizator />} />
            </Route>

            {/* Authenticated layout için MainLayout kullan */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="sinema" element={<Sinema />} />
              <Route path="bale" element={<Bale />} />
              <Route path="tiyatro" element={<Tiyatro />} />
              <Route path="konferans" element={<Konferans />} />
              <Route path="spor" element={<Spor />} />
              <Route path="profil" element={<Profil />} />
            </Route>
          </Routes>
        </AuthProvider>
     </Router>
  );
}

export default App;

