import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { SitesSection } from "./components/SitesSection";
import { GamesSection } from "./components/GamesSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EcommerceSection } from "./components/EcommerceSection";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/Sites" element={<SitesSection />} />
        <Route path="/ecommerce" element={<EcommerceSection />} />
        <Route path="/games" element={<GamesSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;