import SvgDefs from "./components/SvgDefs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ribbon from "./components/Ribbon";
import Menu from "./components/Menu";
import LuckyStar from "./components/LuckyStar";
import Where from "./components/Where";
import Footer from "./components/Footer";
import useScrollProgress from "./hooks/useScrollProgress";

export default function App() {
  const progress = useScrollProgress();

  return (
    <>
      <SvgDefs />
      <div id="bar" style={{ width: progress + "%" }} />

      <Navbar />
      <Hero />
      <Ribbon />
      <Menu />

      <div className="edge" style={{ "--c": "var(--pink)", backgroundColor: "var(--cream)" }} />
      <LuckyStar />

      <div className="edge" style={{ "--c": "var(--brown)", backgroundColor: "var(--pink)" }} />
      <Where />

      <Footer />
    </>
  );
}