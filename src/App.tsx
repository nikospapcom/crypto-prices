import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coin from './pages/Coin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:id" element={<Coin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
