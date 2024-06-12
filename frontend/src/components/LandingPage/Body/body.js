import { Logo, Banner, HeadlineFeature, ProductFeatures, Testimonial } from '../../index';
import './body.scss';

function Body() {
    return (
        <div className="body">
            <Logo />
            <Banner />
            <HeadlineFeature />
            <ProductFeatures />
            <Testimonial />
        </div>
    );
}

export default Body;
