import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './common/components/header';
import { LoginPage } from './common/pages/Authentication/loginPage';
import { SignupPage } from './common/pages/Authentication/signupPage';
import { LandingPage } from './common/pages/LandingPage/landingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
