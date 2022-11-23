import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import { Home } from './components/Home';
import { Cart } from "./components/Cart";

function App() {
  return (

    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
