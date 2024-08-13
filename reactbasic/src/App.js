import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/footer/footer';
import HomePage from './customer/pages/HomePage/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add Font Awesome CSS import

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
