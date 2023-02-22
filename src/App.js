import { Toast } from './common/components/toast';
import './App.css';
import { Header } from './common/components/header';
import { AllRoutes } from './common/components/Routes';
import { useSelector } from 'react-redux';

function App() {
  const { toastInfo } = useSelector((store) => store.products);

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      {toastInfo?.isToastOpen && <Toast />}
    </div>
  );
}

export default App;
