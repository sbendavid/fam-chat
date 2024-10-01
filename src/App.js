import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./screens/LandingPage";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="chat" element={<ChatScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
