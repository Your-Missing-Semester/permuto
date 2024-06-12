import './headlinefeature.scss';

function SignUp() {
    return (
        <div className="sign-up">
            <div className="text-container">
                {/* TODO T22: header and description */}
                <h1>
                    Random Big Text Header lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h1>

                <p>
                    very long and random small texts here Ut enim ad minim veniam, quis nostrus exercitaton ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <a 
                    className="sign-up-link"
                    //TODO T11: place sign up link here
                    href="replace"
                >
                    SIGN UP
                </a>
            </div>

            <div className="img-container">
                {/* TODO T20: replace image */}
                <img src="" alt="Person using application." width="100" height="90" /> 
            </div> 
        </div>
    )
}

export default SignUp;
