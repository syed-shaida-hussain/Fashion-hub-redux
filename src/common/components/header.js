import Logo from '../../assets/logo.svg';
import { Button, TextField, Badge } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { hideToast, resetUserData, showToast } from '../../features/products/productSlice';
import { searchFilter } from '../../features/filters/filterSlice';

const Header = () => {
  const { cartItems, wishlistItems } = useSelector((store) => store.products);
  const { authStatus } = useSelector((store) => store.auth);
  const { searchQuery } = useSelector((store) => store.filters);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUserData());
    localStorage.removeItem('ENCODED_TOKEN');
    dispatch(
      showToast({ content: 'You have been successfully logged out!', toastType: 'success' })
    );
    setTimeout(() => {
      dispatch(hideToast());
    }, 2000);
    navigate('/login');
  };

  return (
    <nav className="header-nav flex-r sp-bw ml1 mr1 mt-half ctr-vert">
      <div className="flex-r ctr-vert logo-container sp-bw">
        <img src={Logo} alt="logo" className="logo ml1" />
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'sidebar-link-active link' : ' link ')}>
          <Button variant="text">Home</Button>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Button variant="text">Products</Button>
        </NavLink>
      </div>
      {location.pathname === '/products' && (
        <TextField
          id="filled-basic"
          className="input-field"
          label="Search products...."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => dispatch(searchFilter(e.target.value))}
        />
      )}

      <ul className="flex-r sub-nav sp-bw ctr-vert">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Badge badgeContent={cartItems?.length} color="success">
            <ShoppingCartCheckoutOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => (isActive ? 'active-link ml1' : ' link ml1')}>
          <Badge badgeContent={wishlistItems?.length} color="success">
            <FavoriteBorderOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        {!authStatus ? (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active-link ml1' : ' link ml1 ')}>
            <AccountBoxOutlinedIcon className="icon" />
          </NavLink>
        ) : (
          <Button sx={{ marginLeft: '1rem' }} variant="contained" onClick={() => logoutHandler()}>
            Logout
          </Button>
        )}
      </ul>
    </nav>
  );
};

export { Header };
