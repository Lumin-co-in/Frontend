import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import AboutUs from "./Pages/AboutUs";
import CoursePage from "./Pages/CoursePage";
import RegisterPage from "./Pages/RegisterPage";
import UserProfilePage from "./Pages/UserProfilePage";


const App = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage/>} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/#product" element={<Home />} />
            <Route exact path="/courses/:term/:id" element={<CoursePage />} />
            <Route exact path="/userprofilePage" element={<UserProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
