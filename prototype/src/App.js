import './App.css';
import  Header from './Components/Header.jsx';
import TopSection  from './Components/Top_Section.jsx';
import OurServices from './Components/OurServices';
import Contact from './Components/contact.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <OurServices />
      <Contact />
    </div>
  );
}

export default App;
