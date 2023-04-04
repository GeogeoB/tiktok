import React,  { useEffect, useRef, useState } from 'react';

function Description({info}) {

    console.log(info.hastags)

    const hastags = info.hastags.map((hastag) => (
        <p>#{hastag}</p>
    ))

    return (
        <>
            <div className="descriptionVideo">
                <p className='descriptionVideo-pseudo'>{info.user}</p>
                <div className="description-text">
                    <p>{info.place}</p>
                    <div className="hastags">
                        {hastags}
                    </div>
                    <p className="description-readmore">Read More</p>
                </div>
            </div>
        </>
    )
}

export default Description