import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  return (
    <>
      <header id="exemplo">
        <h1>hello word</h1>
      </header>
      <nav>
        <ul>
        <Link to="/">

          <li>Home</li>

          </Link>

          <Link to="/about">

          <li>About</li>

          </Link>
        </ul>
      </nav>
    </>
  );
}
