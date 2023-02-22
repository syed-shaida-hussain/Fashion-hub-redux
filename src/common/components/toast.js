import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const Toast = () => {
  const { toastInfo } = useSelector((store) => store.products);
  return (
    <Alert
      sx={{
        width: 'fit-content',
        margin: 'auto',
        position: 'fixed',
        zIndex: 1,
        right: '1rem',
        bottom: '1rem'
      }}
      variant="outlined"
      severity={toastInfo?.toastType}>
      {toastInfo?.toastContent}
    </Alert>
  );
};

export { Toast };
