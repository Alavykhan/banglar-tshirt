import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('gold ring');
export const MoneyContext = createContext(0);

const Grandpa = () => {
   const [money, setMoney]= useState(0);
    return (
        <div className='grandpa'>
            <h1>grandpa</h1>
            <p>Grandpa's Money: {money}</p>
            
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
*1. Create a context
*2. Create a provider and pass a value
*3. Use useContext to receive the value
**/ 