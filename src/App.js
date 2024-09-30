import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Header from "./components/Header";
import SignUp from "./screens/RegisterScreen";
import Login from "./screens/LoginScreen";
import ChatComponent from "./components/ChatComponent";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
