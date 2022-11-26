import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navBar">
    <ul className="nav">
      <p className="logo">Bookstore CMS</p>
      <li className="navLink"><NavLink to="/" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>BOOKS</NavLink></li>
      <li className="navLink"><NavLink to="/categories" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>CATEGORIES</NavLink></li>
      <div className="userBtn"><FaUserAlt style={{ color: '#0290ff' }} /></div>
    </ul>
  </div>
);

export default Navbar;
