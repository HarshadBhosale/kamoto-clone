import Elizabeth from "./elizabeth";
import Generative from "./generative";
import MarketPlace from "./marketplace";
import Navbar from "./navbar";
import styles from "./styles.css";
import SunnyBar from "./sunny-bar";
import SunnyLeoneAI from "./sunny-leone-ai";
import TailorMadeAI from "./tailor-made-ai";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <SunnyBar />
      <Elizabeth />
      <Generative />
      <MarketPlace />
      <SunnyLeoneAI />
      <TailorMadeAI />
    </div>
  );
}
