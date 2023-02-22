import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from './pageNotFound';
import { RequireAuth } from './requireAuth';
import { LoginPage } from '../pages/Authentication/loginPage';
import { SignupPage } from '../pages/Authentication/signupPage';
import { CartPage } from '../pages/cartPage/cartPage';
import { LandingPage } from '../pages/LandingPage/landingPage';
import { ProductListingPage } from '../pages/productListingPage/productListingPage';
import { SingleProductPage } from '../pages/singleProductPage/singleProductPage';
import { WishlistPage } from '../pages/wishlistPage/wishlistPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path={`products/:productId`} element={<SingleProductPage />} />
      <Route path="/" element={<RequireAuth />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export { AllRoutes };
