import React, { useContext } from "react"
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from "./Cart";
import Item from './Item';


export default function ContextCart() {

    const { item } = useContext(CartContext)
    const { ClearCart } = useContext(CartContext)

    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>0</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">0</span> items in shopping cart</p>

                <div className="cart-items">

                    <div className="cart-items-container">
                        <Scrollbars>
                            {item.map((curItem) => {
                                return (<Item key={curItem.id} {...curItem} />
                                )
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </section>
            <div className="card-total">
                <h3>Cart Total : <span>2200rs</span></h3>
                <button>checkout</button>
                <button className="" onClick={ClearCart}>Clear Cart</button>

            </div>
        </>
    );
}



