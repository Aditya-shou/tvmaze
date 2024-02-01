import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
          <nav className="navbar__nav">
            <h3 className="navbar__brand">
              <Link to="/" style={{ color: 'white' }}>
                TV MAZE
              </Link>
            </h3>
          </nav>
        </div>
    </div>
  )
}

export default Navbar