import React from 'react'

export default function CartProduct(props) {

    function removeHandler(id) {
        props.removeFunc(id)
    }

    return (
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src={props.img} width="100" height="100" />
                <span className="cart-item-title">{props.title}</span>
            </div>
            <span className="cart-price cart-column">${props.price}</span>
            <div className="cart-quantity cart-column">

                <button className="btn btn-danger" type="button" onClick={() => removeHandler(props.id)}>REMOVE</button>
            </div>
        </div>
    )
}
