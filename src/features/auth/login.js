import '../../style/utils.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from './authSlice';
// import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const initialUserData = { email: '', password: '' };
  const [user, setUser] = useState(initialUserData);
  const signinServive = async ({ email, password }) => {
    try {
      const { data } = await axios.post('/api/auth/login', {
        email: email,
        password: password
      });
      return data;
    } catch (e) {
      console.log(e.response.data.errors[0]);
      //   toast.error(e.response.data.errors[0]);
    }
  };

  const signinSubmitHandler = async (user) => {
    const data = await signinServive(user);
    if (data.encodedToken !== undefined) {
      localStorage.setItem('ENCODED_TOKEN', data.encodedToken);
      if (location.state != null) {
        navigate(location.state.from.pathname);
      } else {
        navigate('/products');
      }
    }
    // toast.success('Logged in successfully');
    dispatch(loginUser(data.encodedToken));
  };
  return (
    <div className="signup-form-container flex-c ctr-vert mt1 mb1 ">
      <h2 className="mb1 pr-clr">Login</h2>
      <form
        className="signup-form p1 flex-c "
        onSubmit={(e) => {
          e.preventDefault();
          signinSubmitHandler(user);
        }}>
        <TextField
          required
          type="email"
          value={user.email}
          id="standard-basic2"
          label="Email"
          variant="standard"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          required
          type="password"
          value={user.password}
          id="standard-basic3"
          label="Password"
          variant="standard"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            signinSubmitHandler({
              email: 'adarshbalika@gmail.com',
              password: 'adarshbalika'
            })
          }>
          Login as Guest
        </Button>
        <Button onClick={() => navigate('/signup')}>Create new account</Button>
      </form>
    </div>
  );
};

export { Login };
