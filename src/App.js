import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import ProductDetails from "./Component/ProductDetails";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Announce from './Component/Announce';
import { ProductContextProvider } from './Context/product-context';
import Cart from './Pages/Cart/Cart';
import Jewelery from './Component/Jewelery';
import MenClothing from './Component/MenClothing';
import Electronics from './Component/Electronics';
import WomenClothing from './Component/WomenClothing';
import Profile from './Component/Profile';
import SearchResults from './Component/SearchResults';


function App() {
  return (
    <>
    <ProductContextProvider>
      <Router>
      <Announce />
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Cart" element= {<Cart />} />
        <Route path="/ProductDetails/:id" element= {<ProductDetails />} />
        <Route path="/Profile" element= {<Profile />} />
        <Route path="/category/Electronics" element={<Electronics />} />
        <Route path="/category/Jewelery" element={<Jewelery />} />
        <Route path="/category/MenClothing" element={<MenClothing />} />
        <Route path="/category/WomenClothing" element={<WomenClothing />} />
        <Route exact path="/SearchResults" element={<SearchResults/>} />

      </Routes>
      <Footer />
    </Router>
    </ProductContextProvider>
    </>
  );
}

export default App;
