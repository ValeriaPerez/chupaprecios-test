import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCart } from './hooks';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import history from './utils/history';

function App() {
  const { cart } = useCart();
  return (
    <Router history={history}>
      <Navbar cart={cart} isCart={cart.length} />
      <Routes>
        <Route exactly path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
