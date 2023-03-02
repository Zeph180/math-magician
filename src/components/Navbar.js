import { Link } from 'react-router-dom';
import '../Nav.css';

export default function Navbar() {
  return (
    <nav>
      <h1>Math Magician</h1>
      <div className="nav-links">
        <span><Link to="/">Home</Link></span>
        <span><Link to="calculator">Calculator</Link></span>
        <span><Link to="quotes">Quote</Link></span>
      </div>
    </nav>
  );
}
