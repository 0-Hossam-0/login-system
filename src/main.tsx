import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeApp } from './Redux/StoreApp';
import LoadingLayOut from './Components/LoadingLayOut';
import Notification from './Components/Notification';
import { RegisterAndLoginProvider } from './RegisterAndLoginContext';
import RegisterAndLogin from './Pages/RegisterAndLogin';

// Create main App component
function App() {
  return (
    <BrowserRouter>
      {/* Global components */}
      <LoadingLayOut />
      <Notification />

      <Routes>
        {/* All routes now go to RegisterAndLogin */}
        <Route
          path="/*"
          element={
            <RegisterAndLoginProvider>
              <RegisterAndLogin />
            </RegisterAndLoginProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Render the application
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={storeApp}>
      <App />
    </Provider>
  );
}