import React from 'react';
import { loginValidation } from '../Functions/Validation';
import { useLoginContext } from '../LoginContext';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';

const Login: React.FC = () => {
  const { loginPanel, LoginMessages } = useLoginContext();
  const { getLoadingState, setIsLogin, LoginInputs, setLoadingState, setShowOverlay } = useRegisterAndLoginContext();
  return (
    <div>
      <div className="flex items-center justify-center h-[50px] dark:border-white border-black border-b">
        <p className="dark:text-white text-black font-bold text-2xl select-none">Login</p>
      </div>
      <div className="flex flex-col gap-6 p-10">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">Email/Username</label>
          <input 
            type="text" 
            className="w-full rounded-md p-3 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" 
            placeholder="Email/Username" 
            ref={LoginInputs.emailLogin} 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">Password</label>
          <input 
            type="password" 
            className="w-full rounded-md p-3 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" 
            placeholder="Password" 
            ref={LoginInputs.passwordLogin} 
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-red-500 font-bold text-center" ref={LoginMessages.login}></p>
          {getLoadingState.showLoginLoading && (
            <div className="flex justify-center">
              <div className="inline-block rounded-full text-indigo-600 dark:text-indigo-400 px-4 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
                <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                Loading
              </div>
            </div>
          )}
          <div className="w-full rounded-2xl bg-black overflow-hidden">
            <button
              className="button login h-11 w-full text-center text-white font-bold rounded-2xl bg-transparent"
              onClick={() => {
                loginValidation({ LoginInputs, LoginMessages, setLoadingState, setShowOverlay });
              }}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center items-center border-black dark:border-white border-t pt-4">
            <button
              className="bg-indigo-500 p-2 rounded-xl w-[300px] hover:bg-indigo-400 font-bold"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
