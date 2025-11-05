import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Main from "./page/User/Main";
import Home from "./page/User/Home";
import Cart from "./page/User/Cart";
import Order from "./page/User/Order";
import Profile from "./page/User/Profile";
import PDP from "./page/User/PDP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Main />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="product/:slug" element={<PDP />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;