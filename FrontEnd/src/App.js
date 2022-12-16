import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/not-found" element={<NotFound />} />
               <Route to="/not-found" />
            </Routes>
         </BrowserRouter>
      </div> 
   );
}

export default App;
