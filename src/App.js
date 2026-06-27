import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import WomenPage from "./WomenPage";
import MenPage from "./menPage";
import SneakersPage from "./sneakersPage";
import Registration from "./components/Registration Page/Registration";
import ProductPage from "./components/ProductPage/ProductPage";
import AddToCart from "./components/Add To cart/AddToCart";
import FilterCollections from "./components/FilterCollections/FilterCollections";
import CartSidebar from "./components/CartSidbar/CartSidebar";
import Wishlist from "./components/WishlistPage/Wishlist";
import Sidebar from "./components/Sidebar/Sidebar";
import ScrollToTop from "./components/SrcollToTop";

function App(){
  
  return(
    <>
    <Router>
    <ScrollToTop/>
   <CartSidebar/>
   <Sidebar/>
      <Routes>
        <Route path="/" element={<MenPage/>}></Route>
        <Route path ="/womenPage" element={<WomenPage/>}></Route>
        <Route path ="/sneakersPage" element={<SneakersPage />}></Route>
        <Route path ="/registration" element={<Registration/>}></Route>
        <Route path="/product/:id" element={<ProductPage/>}></Route>
        <Route path="/cart" element={<AddToCart/>}></Route>
        <Route path="/filter/:type" element={<FilterCollections/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cartt" element={<CartSidebar/>} />
        
      </Routes>
    </Router>
    </>
  )
}
export default App;