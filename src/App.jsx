import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import './App.css'

import WebDevelopment from './services/WebDevelopment';
import SeoOptimization from './services/SeoOptimization';
import DigitalMarketing from './services/DigitalMarketing';
import Websites from './portfolio/Websites';
import Apps from './portfolio/Apps';
import Graphics from './portfolio/Graphics';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web" element={<WebDevelopment />} />
            <Route path="/services/seo" element={<SeoOptimization />} />
            <Route path="/services/marketing" element={<DigitalMarketing />} />
            <Route path="/portfolio/Websites" element={<Websites />} />
            <Route path="/portfolio/apps" element={<Apps />} />
            <Route path="/portfolio/graphics" element={<Graphics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
