import Logo from '../../Logo/logo';
import Banner from '../../Banner/banner';
import HeadlineFeature from '../../HeadlineFeature/headlinefeature';
import ProductFeatures from '../../ProductFeatures/product_features';
import Testimonial from '../../Testimonial/testimonial';
import styles from'./body.module.css';

function Body() {
    return (
        <div className={styles.body}>
            <Logo />
            <Banner />
            <HeadlineFeature />
            <ProductFeatures />
            <Testimonial />
        </div>
    );
}

export default Body;
