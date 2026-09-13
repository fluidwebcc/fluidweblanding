import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import WorkIndexPage from "./pages/WorkIndexPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import PracticePage from "./pages/PracticePage";
import FaqPage from "./pages/FaqPage";
import TeamPage from "./pages/TeamPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkIndexPage />} />
        <Route path="work/:slug" element={<CaseStudyPage />} />
        <Route path="services/:slug" element={<PracticePage kind="service" />} />
        <Route path="engage/:slug" element={<PracticePage kind="engage" />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
