import React from 'react';

import './background.scss';
import './global.scss';

export default function Layout(props) {
    return (
        <div>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            {props.children}
        </div>
    );
};