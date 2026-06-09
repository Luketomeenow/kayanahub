import { Navigate, Route, Routes } from 'react-router-dom';
import { HubLayout } from './layouts/HubLayout';
import { AutomationMapPage } from './pages/AutomationMapPage';
import { IntroPage } from './pages/IntroPage';
import { PePipelinePage } from './pages/PePipelinePage';

export default function App() {
  return (
    <Routes>
      <Route element={<HubLayout />}>
        <Route index element={<IntroPage />} />
        <Route path="pe-pipeline" element={<PePipelinePage />} />
        <Route path="automation-map" element={<AutomationMapPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
