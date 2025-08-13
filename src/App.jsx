import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
