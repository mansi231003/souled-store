import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import WomenPage from "./WomenPage";
import MenPage from "./menPage";
import SneakersPage from "./sneakersPage";
import Registration from "./components/Registration Page/Registration"

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MenPage/>}></Route>
        <Route path ="/womenPage" element={<WomenPage/>}></Route>
        <Route path ="/sneakersPage" element={<SneakersPage/>}></Route>
        <Route path ="/registration" element={<Registration/>}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App;