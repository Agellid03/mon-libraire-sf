import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
