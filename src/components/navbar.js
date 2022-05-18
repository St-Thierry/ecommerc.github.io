import './navbar.css';
import './bootstrap.min.css';
import React from "react";
import { NavLink } from "react-render-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const state = useSelector((state) => state.handleCart)

  return (
   <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <NavLink class="navbar-brand" to="/">Shop L'Oeuvre Da</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link active" to="/products">Products</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link active" to="/about">About</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="/contact" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</NavLink>
          </li>
        </ul>

        <form>
          <input class="form-control mr-2" type="text" placeholder="Search" aria-label="Search"/>
        </form>

        <div class = "buttons">
          <NavLink to="/Login" class="btn btn-outline-light mx-2">
            <i class="fa fa-sign-in">
            </i> Login 
            </NavLink>
          <NavLink to="/Register" class="btn btn-outline-light mx-1">
            <i class="fa fa-user-plus"></i> 
            Register 
          </NavLink>
          <NavLink to="/Cart" class="btn btn-outline-light mx-1">
            <i class="fa fa-shopping-cart"></i> 
            Cart ({state.length})
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;