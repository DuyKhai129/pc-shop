import React from "react";
import { Link } from "react-router-dom";
function Header2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto " style={{ marginLeft: "330px" }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-5" to={`../category/pc`}>
                PC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-5" to={`../category/laptop`}>
                Laptop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active ms-5"
                to={`../category/accessory`}
              >
                PHỤ KIỆN
              </Link>
            </li>
          </ul>
          {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
        </div>
      </div>
    </nav>
  );
}
export default Header2;
