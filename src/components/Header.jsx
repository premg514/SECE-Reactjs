import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
      <h1>LOGO</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/products" >Products</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}
export default Header;

