import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplineScene from './SplineScene';
import {Login} from './login.jsx'; // <-- Your Login component
// ... other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplineScene />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
