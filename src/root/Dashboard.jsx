import React from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Home from "../features/layouts/start/Home";
import About from "../features/layouts/about/About";
import Shop from "../features/layouts/shop/Shop";
import Contact from "../features/layouts/contact/Contact";
import SiginIn from "../features/layouts/sigin/SiginIn";
import SiginUp from "../features/layouts/sigin/SiginUp";
import ForgetPassword from "../features/layouts/sigin/ForgetPassword";
import VerifyEmail from "../features/layouts/sigin/VerifyEmail";
import NewPassword from "../features/layouts/sigin/NewPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../fireBase";
import ProtectRoute from "../features/components/protect/ProtectRoute";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  return (
    <>


      <Routes>
        <Route index element={<SiginIn />} />
        <Route path="signUp" element={<SiginUp />} />
        <Route path="retstarPassword" element={<ForgetPassword />} />
        <Route path="verifyEmail" element={<VerifyEmail />} />
        <Route path="newPassword" element={<NewPassword />} />
        <Route element={<ProtectRoute user={user} />}>
          <Route path="home" element={<Home/>} />
          <Route path="haqqımızda" element={<About />} />
          <Route path="məhsullar" element={<Shop />} />
          <Route path="əlaqə" element={<Contact />} />
        </Route>
      </Routes>

    </>
  );
};

export default Dashboard;
