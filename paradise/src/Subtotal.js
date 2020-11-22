import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div classname = 'subtotal'>
            <CurrencyFormat
                renderText = { (value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className = "subtotal_gift">
                            <input type = "checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"Text"}
                thousandSeparator = {true}
                prefix = {"E"}
            />
        </div>
    )
}

export default Subtotal
