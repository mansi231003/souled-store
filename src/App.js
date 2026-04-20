import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import WomenPage from "./WomenPage";
import MenPage from "./menPage";
import SneakersPage from "./sneakersPage";
import Registration from "./components/Registration Page/Registration";
import ProductPage from "./components/ProductPage/ProductPage";
import AddToCart from "./components/Add To cart/AddToCart";

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MenPage/>}></Route>
        <Route path ="/womenPage" element={<WomenPage/>}></Route>
        <Route path ="/sneakersPage" element={<SneakersPage/>}></Route>
        <Route path ="/registration" element={<Registration/>}></Route>
        <Route path="/product/:id" element={<ProductPage/>}></Route>
        <Route path="/cart" element={<AddToCart/>}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App;