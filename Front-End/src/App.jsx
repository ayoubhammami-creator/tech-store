import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './redux/store';
import Login from "./pages/Login";
import Register from "./pages/Register";


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

import './App.css';






   function App() {
  console.log('✅ App component loaded');

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AnnouncementBar />
          <Navbar />

          <main className="main-content">
           { /*<Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>*/}
            <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />


  {/* ✅ AUTH PAGES */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />


  {/* ✅ PAYMENT RESULT PAGES */}
  <Route path="/payment-success" element={<PaymentSuccess />} />
  <Route path="/payment-failed" element={<PaymentFailed />} />
</Routes>

          </main>

          <Footer />

          <a
            href="https://wa.me/21698777046"
            className="whatsapp-float shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            title="Contactez-nous sur WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#2563eb',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
        
      </Router>
    </Provider>
  );
}

export default App;   
