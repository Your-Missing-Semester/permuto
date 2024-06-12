import styles from './testimonial.module.css'

function Testimonial() {
    return (
        <div className={styles.testimonial}>
            <div className={styles["text-container"]}>
                {/* TODO T25: header and description */}
                <div className={styles.header}>
                    Some Text Here
                </div>

                <div className={styles.text}>
                    very very very very very long small texts askfjwoeiu; iapoiwefhsf jsfljwebalkjfakj;lwkej
                </div>
            </div>

            <div className={styles["img-container"]}>
                {/* TODO T24: replace image */}
                <img src="" alt="Person enjoying this app." width="150" height="90"/>
            </div>

        </div>
    );
}

export default Testimonial;
