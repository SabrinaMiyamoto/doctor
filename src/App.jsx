import { useTheme } from "@mui/material/styles";
import Hero from "./components/Hero";
import About from "./components/About";
import Interview from "./components/Interview";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import './App.css'
import Header from "./assets/Header";
import Footer from "./assets/Footer";

function App() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Interview />
      <Reviews />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
