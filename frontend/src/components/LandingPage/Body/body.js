import { Logo, Banner, SignUp, ProductFeatures, Testimonial } from '../../index';
import './body.scss';

function Body() {
    return (
        <div className="body">
            <Logo />
            <Banner />
            <SignUp />
            <ProductFeatures />
            <Testimonial />
        </div>
    );
}

export default Body;
