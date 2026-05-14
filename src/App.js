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
import { useState } from "react";

function App(){

  const [cartSidebar, setCartSidebar] = useState(false);
  
  return(
    <>
    <Router>
     <CartSidebar
        sidebarOpen={cartSidebar}
        close={() => setCartSidebar(false)}
      />
      <Routes>
        <Route path="/" element={<MenPage openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path ="/womenPage" element={<WomenPage openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path ="/sneakersPage" element={<SneakersPage openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path ="/registration" element={<Registration openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path="/product/:id" element={<ProductPage openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path="/cart" element={<AddToCart openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path="/filter/:type" element={<FilterCollections openCart={() => setCartSidebar(true)}/>}></Route>
        <Route path="/wishlist" element={<Wishlist />} />
        
      </Routes>
    </Router>
    </>
  )
}
export default App;