// LOGO
// IMG / BANNER
// Description & image

import './BodyOne.css'

function BodyOne() {
    return (
        <div className="BodyOne">
            <header className="Logo">
                <img src="" alt="[ LOGO ]" />
            </header>

            <div className="Banner">
                <img src="" alt="IMG / Banner" />
            </div>

            <div className="Content-container-B1">
                <div className="Text-container-B1">
                    <h1>
                        Random Big Text Header lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>

                    <p>
                        very long and random small texts here Ut enim ad minim veniam, quis nostrus exercitaton ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <a 
                        className="Sign-up-button"
                        href="https://react.dev/learn/tutorial-tic-tac-toe"
                    >
                        SIGN UP
                    </a>
                </div>

                <div className="IMG-container-B1">
                    <img src=""  alt="IMG" width="100" height="90" />
                </div>
            </div>
        </div>
    );
}

export default BodyOne;
