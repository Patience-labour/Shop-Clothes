import { Arrivals } from "./components/arrivals/Arrivals";
import { Brands } from "./components/brands/brands";
import { Favourite } from "./components/favourite/Favourite";
import { Header } from "./components/header/Header";
import { Promo } from "./components/Promo/Promo";
import { Download } from "./components/download/Download";
import { Newsletter } from "./components/newsletter/Newsletter";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Favourite />
      <Download />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
