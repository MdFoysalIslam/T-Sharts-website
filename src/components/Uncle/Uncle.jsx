import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { DulContext, MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const dull = useContext(DulContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa Money : {money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Sent 1000tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila: {dull}</Cousin>
            </section>
        </div>
    );
};

export default Uncle;