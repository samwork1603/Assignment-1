import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import OutletPage from './OutletPage';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/outlet/:outletName" element={<OutletPage />} />
        <Route path="/cart/outlet/:outletName" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
