import './testimonial.scss'

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="text-container">
                {/* TODO T25: header and description */}
                <h2>
                    Some Text Here
                </h2>

                <p>
                    very very very very very long small texts askfjwoeiu; iapoiwefhsf jsfljwebalkjfakj;lwkej
                </p>
            </div>

            <div className="img-container">
                {/* TODO T24: replace image */}
                <img src="" alt="Person enjoying this app." width="150" height="90"/>
            </div>

        </div>
    );
}

export default Testimonial;
