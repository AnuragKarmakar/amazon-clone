import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
  window.scrollTo(0, 0)
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/bankt1/FST_1500x100_English.jpg"
                alt=""/>
                <div>
                  <h3>Hello, {user?.email}</h3>
                  <h2 className="checkout__title">Your Shopping Cart</h2>
                  {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
                </div>
            </div>

            <div className="checkout__right">
               <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
