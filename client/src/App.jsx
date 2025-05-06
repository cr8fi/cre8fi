import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PasswordResetCode from './pages/auth/PasswordResetCode';
import SuccessScreen from './components/SuccessScreen';

function App() {
  return (
  
      
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/code" element={<PasswordResetCode />} />
        <Route path="/success" element={<SuccessScreen />} />
      
      </Routes>
  
  );
}

export default App;
