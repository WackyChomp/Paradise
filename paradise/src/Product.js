import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className = "product">
            
            <div className = "product__info">
                <p>The Wack Inflatable Tube Man</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>4.20</strong>
                </p>
                
                <div className = "product__rating">
                    <p>🌟</p>
                </div>
            </div>

            <img src = "https://images-na.ssl-images-amazon.com/images/I/714ixvtUpZL._AC_SL1500_.jpg" alt = ""/>

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
