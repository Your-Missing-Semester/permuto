import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">LandingPage</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/reset-password">ResetPassword</Link>
        </nav>
    );
}

export default Navigation;
