import { Button } from '@mui/material';
import PageNotFoundImg from '../../assets/page_not_found.svg';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-img">
      <img className="" src={PageNotFoundImg} alt="page-not-found" />
      <Button variant="contained" onClick={() => navigate('/home')}>
        Back To Homepage
      </Button>
    </div>
  );
};

export { PageNotFound };
