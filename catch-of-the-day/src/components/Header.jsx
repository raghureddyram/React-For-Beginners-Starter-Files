import React from 'react';

// stateless functional component, with any props passed in in es6 syntax
// this.props is instead props

const Header = (props) => {
    return(
        <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}

export default Header;