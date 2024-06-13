import styles from './product_features.module.css'

function ProductFeatures() {
    return (
        /* TODO T23: header and description */
        <div className={styles["product-features"]}>
            <div className={styles["img-items"]}>
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img1" width="50" height="50" />
                <h5 className={styles["small-header"]}>Some Header Here</h5>
                <p className={styles["text"]}>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>

            <div className={styles["img-items"]}>
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img2" width="50" height="50" />
                <h5 className={styles["small-header"]}>Some Header Here</h5>
                <p className={styles["text"]}>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>

            <div className={styles["img-items"]}>
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img3" width="50" height="50" />
                <h5 className={styles["small-header"]}>Some Header Here</h5>
                <p className={styles["text"]}>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>
        </div>
    );
}

export default ProductFeatures;
