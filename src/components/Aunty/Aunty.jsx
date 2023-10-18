import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { TikliContext } from '../Grandpa/Grandpa';

const Aunty = ({ring}) => {
    const tikli = useContext(TikliContext);
    return (
        <div>
            <h2>Aunty</h2>
            <p>{tikli}</p>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
                
            </section>
        </div>
    );
};

export default Aunty;