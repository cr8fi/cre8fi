import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PasswordResetCode from './pages/auth/PasswordResetCode';
import SuccessScreen from './components/SuccessScreen';
import NewPassword from './pages/auth/NewPassword';
import Login from './pages/auth/Login';
import Home from './pages/Home';

function App() {
  return (
  
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/code" element={<PasswordResetCode />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/new" element={<NewPassword />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
  
  );
}

export default App;
