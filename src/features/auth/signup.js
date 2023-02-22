import '../../style/utils.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerNewUser } from './authSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { hideToast, showToast } from '../products/productSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialUserData = { firstName: '', lastName: '', email: '', password: '' };
  const [user, setUser] = useState(initialUserData);

  const signupServive = async ({ firstName, lastName, email, password }) => {
    try {
      const { data } = await axios.post('/api/auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      });
      return data;
    } catch (e) {
      dispatch(showToast({ content: e.response.data.errors[0], toastType: 'error' }));
      setTimeout(() => {
        dispatch(hideToast());
      }, 2000);
    }
  };

  const signupSubmitHandler = async () => {
    const data = await signupServive(user);
    if (data.encodedToken !== undefined) {
      localStorage.setItem('ENCODED_TOKEN', data.encodedToken);
      navigate('/products');
    }
    dispatch(showToast({ content: 'Your Account is successfully created!', toastType: 'success' }));
    setTimeout(() => {
      dispatch(hideToast());
    }, 2000);

    dispatch(registerNewUser(data.encodedToken));
  };

  return (
    <div className="signup-form-container flex-c ctr-vert mt1 mb1 ">
      <h2 className="mb1 pr-clr">Signup</h2>
      <form
        className="signup-form p1 flex-c "
        onSubmit={(e) => {
          e.preventDefault();
          signupSubmitHandler();
        }}>
        <TextField
          required
          type="text"
          value={user.firstName}
          id="standard-basic"
          label="FirstName"
          variant="standard"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <TextField
          required
          type="text"
          value={user.lastName}
          id="standard-basic1"
          label="LastName"
          variant="standard"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
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
        <Button type="submit" variant="outlined">
          Signup
        </Button>
        <Button variant="text" onClick={() => navigate('/login')}>
          Already a user?
        </Button>
      </form>
    </div>
  );
};

export { Signup };
