  import './App.css';  // Si tienes otros estilos globales
import Banner from './components/banner';
import ContactSection from './components/Contact';
import FAQSection from './components/FAQSection';
import Services from './components/Services';
import ServiceSection from './components/ServiceSection';

function App() {
  return (
    <div className="App">
      <Banner />
      <Services/>
      <ServiceSection/>
      <FAQSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
