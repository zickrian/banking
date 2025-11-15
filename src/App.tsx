import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import NasabahPage from './pages/NasabahPage';
import NasabahDetailPage from './pages/NasabahDetailPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import FormKreditPage from './pages/FormKreditPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="nasabah" element={<NasabahPage />} />
          <Route path="nasabah/:id" element={<NasabahDetailPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="form-kredit/:nasabahId?" element={<FormKreditPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
