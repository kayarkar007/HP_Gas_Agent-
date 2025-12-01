import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState(true);
  const Toggletheme = () => {
    setTheme(!theme);
  };
  return (
    <Layout theme={theme} setTheme={setTheme} Toggletheme={Toggletheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup theme={theme} />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/dashboard" element={<Dashboard theme={theme} />} />
      </Routes>
    </Layout>
  );
}

export default App;
