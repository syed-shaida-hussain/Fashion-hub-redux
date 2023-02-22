import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './common/components/header';
import { LoginPage } from './common/pages/Authentication/loginPage';
import { SignupPage } from './common/pages/Authentication/signupPage';
import { LandingPage } from './common/pages/LandingPage/landingPage';
import { ProductListingPage } from './common/pages/productListingPage/productListingPage';
import { SingleProductPage } from './common/pages/singleProductPage/singleProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path={`products/:productId`} element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
