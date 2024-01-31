import { Banner, Deals, Footer, Navbar } from "./components";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Deals />
      <Footer />
    </div>
  );
}
