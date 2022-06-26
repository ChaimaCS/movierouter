import React from 'react';

const Navbar = (props) => {
  // console.log(props);
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark opacity-75">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#!">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#!">Favourites</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#!">Top Rated</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">Series</a></li>
            <li><a className="dropdown-item" href="#!">Film</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#!">Genre</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
     
    </div>
  </div>
</nav>
                
  );
};


export default Navbar;
