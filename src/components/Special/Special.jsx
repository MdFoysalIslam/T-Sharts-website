import React, { useContext } from 'react';
import { RingContext, TikliContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const tikli = useContext(TikliContext);
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>{tikli}</p>
            <p><small>{angti}</small></p>

        </div>
    );
};

export default Special;