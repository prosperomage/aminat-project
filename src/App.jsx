import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainContent from "./pages/MainContent";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
