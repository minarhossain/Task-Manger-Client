import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import CreatePage from './pages/CreatePage';
import NewPage from './pages/NewPage';
import ProgressPage from './pages/ProgressPage';
import CompletedPage from './pages/CompletedPage';
import CanceledPage from './pages/CanceledPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Page404 from './pages/Page404';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import FullScreenLoader from './components/MasterLayout/FullScreenLoader';
import { getToken } from './helper/SessionHelper';

function App() {
  const isAuthenticated = !!getToken();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isAuthenticated ? <DashboardPage /> : <Navigate to='/login' replace />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/all' element={<NewPage />} />
          <Route path='/progress' element={<ProgressPage />} />
          <Route path='/completed' element={<CompletedPage />} />
          <Route path='/canceled' element={<CanceledPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/forget-password' element={<ForgetPasswordPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
}

export default App;
