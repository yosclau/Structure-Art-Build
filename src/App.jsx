import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation, Outlet } from 'react-router-dom';
import './index.css';
import { LangProvider, isValidLang, storedLang, persistLang } from './lang';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const TradePartners = lazy(() => import('./pages/TradePartners'));
const Privacy = lazy(() => import('./pages/Privacy'));

function RootRedirect() {
  return <Navigate to={`/${storedLang()}`} replace />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function LangShell() {
  const { lang } = useParams();
  useEffect(() => { if (isValidLang(lang)) persistLang(lang); }, [lang]);
  if (!isValidLang(lang)) return <Navigate to={`/${storedLang()}`} replace />;
  return (
    <LangProvider lang={lang}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<div className="route-loading" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileBar />
    </LangProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LangShell />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<ProjectDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="trade-partners" element={<TradePartners />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
