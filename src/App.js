import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Weather from './Weather/Weather.js';
require('dotenv').config();
function App() {
  return (
    <div>
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
