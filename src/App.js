import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MaterialsPage from './pages/MaterialsPage';
import ProductionTeamPage from './pages/ProductionTeamPage';
import ProjectPage from './pages/ProjectPage';
import SignInPage from './pages/SignInPage';
import BuyMaterialsPage from './pages/BuyMaterialsPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/buymaterials" element={<BuyMaterialsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/productionteam" element={<ProductionTeamPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
