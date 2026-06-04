import { Navigate, Outlet, Route, Routes } from 'react-router';
import CalendarPage from './pages/CalendarPage';
import GymDetailPage from './pages/GymDetailPage';
import MembershipPage from './pages/MembershipPage';
import GymSearchPage from './pages/GymSearchPage';
import ProfilePage from './pages/ProfilePage';
import HomeScreen from '../features/home/HomeScreen';
import RecordStartPage from './pages/RecordStartPage';
import RecordPage from './pages/RecordPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';

function PreviewLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PreviewLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-id" element={<FindIdPage />} />
        <Route path="/find-password" element={<FindPasswordPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/gyms" element={<GymSearchPage />} />
        <Route path="/gyms/saved" element={<GymSearchPage initialView="saved" />} />
        <Route path="/gyms/:gymId" element={<GymDetailPage />} />
        <Route path="/schedule" element={<CalendarPage />} />
        <Route path="/record/start" element={<RecordStartPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/memberships" element={<MembershipPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
}
