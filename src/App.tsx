import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Coin from './pages/Coin';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:id" element={<Coin />}></Route>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
