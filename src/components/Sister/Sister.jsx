import React, { useContext } from 'react';
import { DulContext, MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    const dull = useContext(DulContext);
    return (
        <div>
           <h2> Sister</h2>
        <p>Grand pa money :{money}</p>
           <p>{dull}</p>
        </div>
    );
};

export default Sister;