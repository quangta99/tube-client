import logo from "../../Assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar nav-bg navbar-expand-lg">
      <div className="container d-flex justify-content-between w-100 align-items-center px-4">
        <a className="d-flex align-items-center logo" href="/">
          <img className="p-2" alt="logo" src={logo} />
          <p className="text-white h2 pt-1 text-center">Tube</p>
        </a>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Header;
