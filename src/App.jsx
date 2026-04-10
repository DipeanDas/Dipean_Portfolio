import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Resume from './tabs/Resume';
import Projects from './tabs/Projects';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } }
};

// Tab pages (no main Navbar/Footer)
function TabLayout({ children }) {
  return <>{children}</>;
}

// Main app pages (with Navbar/Footer)
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const isTabRoute = location.pathname === '/resume' || location.pathname === '/projects';

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location} key={location.pathname}>
          {/* Tab routes */}
          <Route path="/resume" element={<TabLayout><Resume /></TabLayout>} />
          <Route path="/projects" element={<TabLayout><Projects /></TabLayout>} />
          {/* Main routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/publications" element={<MainLayout><Publications /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
