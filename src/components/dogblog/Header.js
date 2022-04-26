// import logo from '../assets/dogblog/lali_heart.png';
import NavBar from './Navbar';

const Header = () => {

    return (
        <nav className="header">
            {/* <div className="top-logo">
                <img src={logo} alt="lali with a heart around her" />
            </div> */}
            <div><h1>Lali's Dog Blog</h1></div>
            <NavBar />
        </nav>
    );
}

export default Header;