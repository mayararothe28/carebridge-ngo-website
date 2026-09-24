import { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Volunteer from "./Pages/Volunteer";
import Gallery from "./Pages/Gallery";
import Work from "./Pages/Work";
import Campaigns from "./Pages/Campaigns";
import CampaignDetails from "./Pages/CampaignDetails";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import WorkDetails from "./Pages/WorkDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetails />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;