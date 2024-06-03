import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">React Demo</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Landing page</NavLink>
          </li>
          <li>
            <NavLink to="/persons">Persons</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/foxes">ErrorPage</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
