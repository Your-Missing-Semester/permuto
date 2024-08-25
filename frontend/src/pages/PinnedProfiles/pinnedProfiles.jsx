import NavBar from '../../components/HomePage/NavBar/navBar';
import PinnedProfileBody from '../../components/PinnedProfiles/pinnedProfileBody';
import UserProfile from '../../components/HomePage/Profiles/profiles';

function PinnedProfiles() {
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
            <PinnedProfileBody />
            <UserProfile user={dummyUser}/>
        </div>
    );
}

export default PinnedProfiles;
