import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Paradoxes from './pages/paradoxes';
import FAQ from './pages/faq';
import { MyProvider } from "./MyContext";


function App() {
  return (
    <MyProvider>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paradoxes" element={<Paradoxes />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
    </MyProvider>
  );
}

export default App;
