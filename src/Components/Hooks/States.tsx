import { useState } from 'react';
import type { InputsLevelProps, GetLoadingStateProps, NotificationProps, SetLoadingStateProps } from '../../Types/Interfaces';

export const States = () => {
  const [showUsernameLoading, setUsernameLoading] = useState<boolean>(false);
  const [showEmailLoading, setEmailLoading] = useState<boolean>(false);
  const [showLoginLoading, setLoginLoading] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<NotificationProps>({ message: '', type: 'Error', show: false });
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [verifyEmailLoading, setVerifyEmailLoading] = useState<boolean>(false);
  const [isResendButtonOn, setIsResendButtonOn] = useState<boolean>(true);
  
  const getLoadingState: GetLoadingStateProps = {
    showUsernameLoading,
    showEmailLoading,
    showLoginLoading,
    verifyEmailLoading,
  };

  const setLoadingState: SetLoadingStateProps = {
    setUsernameLoading,
    setEmailLoading,
    setLoginLoading,
    setVerifyEmailLoading,
  };
  
  const [capVal, setCapVal] = useState<string>('');
  const [inputsLevel, setInputsLevel] = useState<InputsLevelProps>({
    from: 1,
    to: 1,
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);
  
  return {
    getLoadingState,
    setLoadingState,
    inputsLevel,
    setInputsLevel,
    isLogin,
    setIsLogin,
    capVal,
    setCapVal,
    showNotification,
    setShowNotification,
    showOverlay,
    setShowOverlay,
    isResendButtonOn,
    setIsResendButtonOn,
  };
};