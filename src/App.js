import './App.css';
import AudienceSections from './components/Audience';
import CTA from './components/CTA';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Problem from './components/Problem';
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Problem />
      <HowItWorks/>
      <AudienceSections/>
      <CTA/>
    </>
  );
}

export default App;
