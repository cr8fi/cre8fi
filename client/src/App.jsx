import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/auth/Register";
import PasswordReset from "./pages/auth/PasswordReset";
import PasswordResetCode from "./pages/auth/PasswordResetCode";
import SuccessScreen from "./components/SuccessScreen";
import NewPassword from "./pages/auth/NewPassword";
import Login from "./pages/auth/Login";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/auth/OnBoarding";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<PasswordReset />} />
      <Route path="/code" element={<PasswordResetCode />} />
      <Route path="/success" element={<SuccessScreen />} />
      <Route path="/new" element={<NewPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/onboarding" element={<OnBoarding />} />
    </Routes>
  );
}

export default App;
