import { NavLink } from "react-router-dom";
import "./navBar.scss";

const links = [
  { value: "Home", path: "/" },
  { value: "Login", path: "/login" },
];

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map(({ value, path }) => (
          <li key={value}>
            <NavLink
              exact
              to={path}
              className="navigation__link"
              activeClassName="navigation__link-active"
            >
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
