import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Statistics } from './pages/Statistics';
import { Profile } from './pages/Profile';
import { Members } from './pages/Members';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/members" element={<Members />} />
        </Routes>
    )
}

export default MainRoutes