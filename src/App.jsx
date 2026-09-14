import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import Footer from "./Components/Footer";
import Campaigns from "./Pages/Campaigns";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Gallery from "./Pages/Gallery";
import Events from "./Pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/our-work" Component={OurWork} />
      <Route path="/campaigns" Component={Campaigns} />
      <Route path="/about" Component={About}/>
      <Route path="/donate" Component={Donate}/>
        <Route path="/register" Component={Register} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="/gallery" Component={Gallery}/>
        <Route path="/events" Component={Events} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;