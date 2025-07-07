import React, { useEffect } from 'react';
import Chats from '../Components/Chats';
import BodyChat from '../Components/BodyChat';
import Settings from '../Components/Settings';
import '../css/app.css';
import Dialog from '../Components/Dialog';
import type { HomeDispatch } from '../Redux/StoreApp';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../Redux/UserDataSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch<HomeDispatch>();
  
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  
  return (
    <div className="flex h-screen bg-[#c5c4c4] dark:bg-[#1c1c1d] overflow-hidden">
      <Dialog />
      <Settings />
      <Chats />
      <BodyChat />
    </div>
  );
};

export default Home;