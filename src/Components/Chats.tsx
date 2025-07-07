import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../css/app.css';
import { useHomeContext } from '../HomeContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/StoreApp';
import Chat from './Chat';
import { searchChat } from '../Functions/Functions';
import { States } from './Hooks/States';

const Chats: React.FC = () => {
  const { setShowAddLayout } = useHomeContext();
  const userData = useSelector((state: RootState) => state.UserData.data);
  const userChats = userData ? userData.chats : [];
  const { searchChats, setSearchChats } = States();
  
  return (
    <div className="w-[24rem] bg-slate-100 dark:bg-[#454849] border-r border-gray-300 dark:border-gray-600 flex flex-col h-full">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-gray-800 dark:text-white">Messages</h1>
          <span className="bg-[#6366f1] text-white text-xs font-semibold px-2 py-1 rounded-full">
            {userChats.length}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddLayout(true)}
            className="bg-[#6366f1] hover:bg-[#5855eb] text-white rounded-full h-10 w-10 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md"
            title="Add new chat"
          >
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <FontAwesomeIcon icon={faEllipsisV} className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-gray-200 dark:bg-gray-700">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl px-4 py-3 pl-11 outline-none border border-gray-300 dark:border-gray-500 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200"
            onChange={(event) => searchChat({ event, setSearchChats, userChats })}
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" 
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500">
        {searchChats && searchChats.length > 0 ? (
          <div className="px-2 py-2">
            {searchChats.map((chat, index) => (
              <Chat key={`search-${chat.id}-${index}`} chat={chat} />
            ))}
          </div>
        ) : searchChats && searchChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-600 dark:text-gray-400">
            <FontAwesomeIcon icon={faSearch} className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No conversations found</p>
            <p className="text-sm">Try searching with different keywords</p>
          </div>
        ) : userData?.chats && userData.chats.length > 0 ? (
          <div className="px-2 py-2">
            {userData.chats.map((chat, index) => (
              <Chat key={`chat-${chat.id}-${index}`} chat={chat} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-600 dark:text-gray-400">
            <FontAwesomeIcon icon={faPlus} className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No conversations yet</p>
            <p className="text-sm text-center px-8">Start a new conversation by clicking the + button above</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;