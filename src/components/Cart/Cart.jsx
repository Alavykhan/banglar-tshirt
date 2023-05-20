import React from 'react';


const Cart = ({cart, handleRemoveFromCart}) => {
    let massage;
    if(cart.length === 0){
        massage = <p>Please add some products</p>
    }
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            {cart.length >2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {massage}
            {
                cart.map(tshirt=><p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;