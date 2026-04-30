import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryEventsPage from "./pages/GalleryEventsPage";
import EventGalleryPage from "./pages/EventGalleryPage";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<HomePage onActiveSectionChange={setActiveSection} />} />
        <Route path="/gallery" element={<GalleryEventsPage />} />
        <Route path="/gallery/:eventRoute" element={<EventGalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
