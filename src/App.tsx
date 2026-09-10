import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import WorkIndexPage from "./pages/WorkIndexPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkIndexPage />} />
        <Route path="work/:slug" element={<CaseStudyPage />} />
      </Route>
    </Routes>
  );
}
