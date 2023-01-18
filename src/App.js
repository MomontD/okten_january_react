// import React from 'react';

import {Simpsons} from "./components/simpsons/simpsons";

const App = () => {
    return (
        <div>
            <Simpsons name={'Homer'} birth={'May 12, 1956'} phrases={'I can\'t wait that long...'}
                      img={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}/>
            <Simpsons name={'Marge'} birth={'born on in Capital City to Clancy Bouvier'} phrases={'“Now it\'s Marge\'s time to shine!”'}
                      img={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}/>
            <Simpsons name={'Bart'} birth={'Feburary 23 or April 1, 1980)'} phrases={'“I’m Bart Simpson, who the hell are you?”'}
                      img={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}/>
        </div>
    );
};

export {App};

