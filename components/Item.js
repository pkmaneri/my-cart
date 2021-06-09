import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Item = ({ title, description, price, img, id, quantity }) => {
    
    const { removeItem,increment ,decrement } = useContext(CartContext)
   
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="iamge" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa fa-minus minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fa fa-plus add" onClick={() => increment(id)}></i>
                </div>
                <div className="price">
                    <h3>{price}</h3>
                </div>
                <div className="remove-item">
                    <i class="fa fa-trash alt" onClick={() => removeItem(id)}
                    ></i>
                </div>
            </div>
            <hr />
        </>
    )
}
export default Item;