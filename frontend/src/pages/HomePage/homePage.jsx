import NavBar from '../../components/HomePage/NavBar/navBar';
import HomePageBody from '../../components/HomePage/Body/homePageBody';
import UserProfile from '../../components/HomePage/Profiles/profiles';

function Home() {
    const dummyUser = {
        firstName: "Santa",
        lastName: "Claus",
        profilePage: "/profile",
        rating: "3.0",
        bio: "lots and lots of stuff",
        location: "North Pole",
        skills: ["sledding", "gift wrapping", "roof hopping"]
    }

    return (
        <div>
            <NavBar />
            <HomePageBody />
            <UserProfile user={dummyUser}/>
        </div>
    );
}

export default Home;
