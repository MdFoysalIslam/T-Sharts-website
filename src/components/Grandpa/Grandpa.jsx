import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
export const RingContext = createContext();
export const DulContext = createContext();
export const TikliContext = createContext()
export const MoneyContext = createContext(0);


const Grandpa = () => {

    const ring = 'daimond';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>has Money: {money}</p>
   <MoneyContext.Provider value={[money, setMoney]}>
    <TikliContext.Provider value="Tikli">
            <DulContext.Provider value='Kanar Dul'>
                <RingContext.Provider value='Goldin Ring'>
                    <section className='flex'>
                        <Father ring={ring}/>
                        <Uncle/>
                        <Aunty ring={ring}/>
                    </section>
                </RingContext.Provider>
            </DulContext.Provider>
        </TikliContext.Provider>
   </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


// create a context and export
// Create a Provider and pass a valu
// use context to received the valu