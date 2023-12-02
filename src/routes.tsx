import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Statistics } from './pages/Statistics';
import { Profile } from './pages/Profile';
import { Members } from './pages/Members';
import { Project } from './pages/Project';
import { SignIn } from './pages/SignIn';
import { Analysis } from './pages/Analysis';
import { Forms } from './pages/Forms';
import { EditProject } from './components/EditProject';
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/members" element={<Members />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/secondform" element={<Forms />} />
            <Route path="/editproject" element={<EditProject />} />
        </Routes>
    )
}

export default MainRoutes