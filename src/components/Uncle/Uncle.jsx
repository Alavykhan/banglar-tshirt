import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa's Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000tk</button>
            <section className='flex'>
                <Cousin>Ajim</Cousin>
                <Cousin>Azmat</Cousin>
            </section>
        </div>
    );
};

export default Uncle;