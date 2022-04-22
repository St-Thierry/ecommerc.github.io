import './navbar.css';
import './bootstrap.min.css';

const Navbar = () => {
  return (
   <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shop L'Oeuvre Da</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                   </li>
        </ul>

        <form>
          <input class="form-control mr-2" type="text" placeholder="Search" aria-label="Search"/>
        </form>

        <div class = "buttons">
        	<a href="" class="btn btn-outline-light mx-2">
        		<i class="fa fa-sign-in"></i> Login </a>
        	<a href="" class="btn btn-outline-light mx-1">
        		<i class="fa fa-user-plus"></i> Register </a>
        	<a href="" class="btn btn-outline-light mx-1">
        		<i class="fa fa-shopping-cart"></i> Cart (0) </a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;