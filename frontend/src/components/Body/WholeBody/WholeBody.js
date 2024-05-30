import React from 'react';
import BodyOne from '../BodyOne/BodyOne';
import BodyTwo from '../BodyTwo/BodyTwo';
import BodyThree from '../BodyThree/BodyThree';
import '../BodyOne/BodyOne.css';
import '../BodyTwo/BodyTwo.css';
import '../BodyThree/BodyThree.css';

function Body() {
    return (
        <div>
            <BodyOne />
            <BodyTwo />
            <BodyThree />
        </div>
    );
}

export default Body;