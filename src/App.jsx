import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Layout from "./Layout/Layout";


import Home from "./Components/Home/Home";
import Course from "./Components/Course/Course";
import Consulting from "./Components/Consulting/Consulting";
import Books from "./Components/Books/Books";
import Contact from "./Components/Contact/Contact";
import  CourseDetails from "./Components/Course/CourseDetails";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/AuthLayout/ForgetPassword";
import VerifyCode from "./Components/AuthLayout/VerifyCode";
import NewPassword from "./Components/AuthLayout/NewPassword";
import BookDetails from "./Components/Books/BookDetails";
import DoctorProfile from "./Components/Home/DoctorProfile";
import Payment from "./Components/Payment/Payment";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dr-profile" element={<DoctorProfile />}/>
          <Route path="/course" element={<Course />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book-details/:id" element={<BookDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;