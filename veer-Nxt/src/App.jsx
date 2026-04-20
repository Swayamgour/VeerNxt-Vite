import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import InformationDetail from "./pages/InformationDetail";
import CategoryArchives from "./pages/CategoryArchives";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";

function App() {
  const location = useLocation();

  return (
    <div className={styles.app}>
      <Header />

      {/* 🔥 ANIMATION WRAPPER */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CategoryArchives" element={<CategoryArchives />} />
          <Route path="/information" element={<InformationDetail />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;