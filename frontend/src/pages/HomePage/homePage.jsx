import NavBar from '../../components/HomePage/NavBar/navBar';
import HomePageBody from '../../components/HomePage/Body/homePageBody';
import UserProfile from '../../components/HomePage/Profiles/profiles';

function Home() {
    return (
        <div>
            <NavBar />
            <HomePageBody />
            <UserProfile />
        </div>
    );
}

export default Home;
