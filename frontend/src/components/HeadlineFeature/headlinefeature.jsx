import styles from './headlinefeature.module.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className={styles["sign-up"]}>
            <div className={styles["text-container"]}>
                {/* TODO T22: header and description */}
                <div className={styles.header}>
                    Random Big Text Header lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>

                <div className={styles.text}>
                    very long and random small texts here Ut enim ad minim veniam, quis nostrus exercitaton ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                <div className={styles["sign-up-link"]}>
                    <Link to="/signup">
                        {/* TODO T11: place sign up link here */}
                        SIGN UP
                    </Link> 
                </div>
            </div>

            <div className={styles["img-container"]}>
                {/* TODO T20: replace image */}
                <img src="" alt="Person using application." width="100" height="90" /> 
            </div> 
        </div>
    )
}

export default SignUp;
