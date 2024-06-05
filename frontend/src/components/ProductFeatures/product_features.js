import './product_features.scss'

function ProductFeatures() {
    return (
        /* TODO T23: header and description */
        <div className="product-features">
            <div className="img-items">
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img1" width="50" height="50" />
                <h5>Some Header Here</h5>
                <p>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>

            <div className="img-items">
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img2" width="50" height="50" />
                <h5>Some Header Here</h5>
                <p>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>

            <div className="img-items">
                {/* TODO T21: replace image */}
                <img src="" alt="product-feature-img3" width="50" height="50" />
                <h5>Some Header Here</h5>
                <p>very small random texts here asdfasdkj kjdsfwrua fsnvasjhvaio</p>
            </div>
        </div>
    );
}

export default ProductFeatures;
