import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/auth/Register';


function App() {
  return (
  
      
      <Routes>
        <Route path="/register" element={<Register />} />
      
      </Routes>
  
  );
}

export default App;
