import NavBar from '../../components/LandingPage/NavBar/navbar';
import Body from '../../components/LandingPage/Body/body';
import Footer from '../../components/LandingPage/Footer/footer'

function LandingPage() {
    return (
        <div className="landing-page">
            <NavBar />
            <Body />
            <Footer />
        </div>
    );
}

export default LandingPage;
