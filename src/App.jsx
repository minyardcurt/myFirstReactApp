import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-section">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
