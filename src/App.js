import "./App.css";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { useSelector } from "react-redux";
import Logout from "./Pages/Logout";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
          <Register />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
