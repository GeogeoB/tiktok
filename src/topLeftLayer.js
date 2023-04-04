import React, { useEffect, useRef, useState } from 'react';

function TopLeftLayer({ user }) {

    if (!user) {
        return (
            <div className="topleftLayer">
                <button className='Button redButton'>Se connecter</button>
            </div>
        )
    }

    return (
        <div className="topleftLayer">
            <div className='user_tll'>
                <div className="pp">
                    <div class="circle">
                        <img src={user.pp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeftLayer