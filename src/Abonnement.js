import { useEffect, createContext, useContext, useState } from 'react';
import './css/index.css';


function Abonnement({user}) {

return (
    <div className='abonnement'>
        <div className="circle_abonnement pp_comments_circle">
            <img src="pp.jpg"/>
        </div>
        <p>{user.name}</p>
        <p>{user.abonnees}</p>
    </div>
)

}

export default Abonnement;