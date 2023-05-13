import React, { useEffect, useRef, useState } from 'react';

function Description({ info }) {

    const [descOpen, setDescOpen] = useState(false);

    const hastags = info.hastags.map((hastag) => (
        <p>#{hastag}</p>
    ))

    const ReadMore = () => {
        setDescOpen((old) => !old)
    }

    return (
        <>
            <div className="descriptionVideo">
                <p className='descriptionVideo-pseudo'>{info.user}</p>
                <div className="description-text">
                    <p>{info.place}</p>
                    <div className="hastags">
                        {hastags}
                    </div>
                    {descOpen && <p className="description-text">{info.desc}</p>}
                    <p className="description-readmore" onClick={ReadMore}>Read {!descOpen ? "More" : "Less"}</p>
                </div>
            </div>
        </>
    )
}

export default Description