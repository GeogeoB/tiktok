import React,  { useEffect, useRef, useState } from 'react';

function Description({user}) {
    return (
        <div className="descriptionVideo">
            <p className='descriptionVideo-pseudo'>{user}</p>
            <div className="description-text">
                <p>Eiffel Tower View, Paris, France</p>
                <p>#France #Paris #Architecture</p>
                <p className="description-readmore">Read More</p>
                <p>Edith Piaf - Sous le ciel de Paris</p>
            </div>
        </div>
    )
}

export default Description