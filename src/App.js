import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CourseCard from "./Components/CourseCard";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import AboutUs from "./Pages/AboutUs";
import CoursePage from "./Pages/CoursePage";
import RegisterPage from "./Pages/RegisterPage";
import UserProfilePage from "./Pages/UserProfilePage";
import PaymentForm from "./Components/PaymentForm";
import AdminDashboard from "./Pages/AdminDashboard";
// import PrivateRoute from "./Components/privateRoute";
import { AuthProvider } from './context/AuthContext';

const App = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://lumin-backend-v1.onrender.com/api/user/courses/all')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching course data:', error));
  }, []);
  


  return (
    <AuthProvider> 
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
            <Route path="/courses/:term/:courseId" element={<CoursePage/>} />
        <Route path="/" element={
          <div className="course-list">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                courseId={course.courseId}
                term={course.term}
              />
            ))}
          </div>
        } />
            <Route exact path="/payment" element={<PaymentForm/>} />
        
            <Route exact path="/userprofilePage" element={<UserProfilePage />} />
            
              <Route path="/admin" element={<AdminDashboard />} />
            
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </AuthProvider> 
  );
};

export default App;
