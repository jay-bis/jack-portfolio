import React from 'react';

import './ProjectItem.scss';

export default function ProjectItem(props) {
    return (
        <div className="proj-item-lvl4 proj-pic-container">
            <img className="proj-pic" src={props.imgPath} />
        </div>
    );
}