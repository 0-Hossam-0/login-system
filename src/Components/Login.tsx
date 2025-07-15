import React from 'react';
import { loginValidation } from '../Functions/Validation';
import { useLoginContext } from '../LoginContext';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';

const Login: React.FC = () => {
  const { loginPanel, LoginMessages } = useLoginContext();
  const { getLoadingState, setIsLogin, LoginInputs, setLoadingState, setShowOverlay } = useRegisterAndLoginContext();
  return (
    <div ref={loginPanel}>
    </div>
  );
};

export default Login;
