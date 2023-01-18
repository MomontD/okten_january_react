import React from 'react';

const Simpsons = (props) => {
    const {name , birth , phrases , img } = props
    return (
        <div>
            <div> Name    : {name}   </div>
            <div> Birth   : {birth}  </div>
            <div> Phrases : {phrases}</div>
            <img src={img} alt='Homer'/>
        </div>
    );
};

export {Simpsons};