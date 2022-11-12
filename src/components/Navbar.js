import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navBar">
    <ul className="nav">
      <p className="logo">Bookstore CMS</p>
      <li className="navLink"><Link to="/">Books</Link></li>
      <li className="navLink"><Link to="/categories">Categories</Link></li>
      <div className="userBtn"><FaUserAlt style={{ color: '#0290ff' }} /></div>
    </ul>
  </div>
);

export default Navbar;
