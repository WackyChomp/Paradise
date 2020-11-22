import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className = "home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428584220_.jpg" 
                alt = ""/>

                <div className = "home__row">
                    <Product 
                    title = "Not so Wacky Inflatable Tube Man"
                    price = {0.50}
                    image = "https://images-na.ssl-images-amazon.com/images/I/714ixvtUpZL._AC_SL1500_.jpg"
                    rating = {1}
                    />
                    <Product 
                    title = "The Blazed Wacky Inflatable Tube Man"
                    price = {4.20}
                    image = "https://images-na.ssl-images-amazon.com/images/I/714ixvtUpZL._AC_SL1500_.jpg"
                    rating = {4}                    
                    />
                </div>

                <div className = "home__row">
                    <Product
                    title = "Plague Doctor Costume for Adults Black Death Doctor Costume"
                    price = {69.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zrsWKKLbL._AC_UY500_.jpg"
                    rating = {13}                    
                    />
                    <Product 
                    title = "Randy Savage Macho Man Costume Adult WWE Costume Officially Licensed Randy Savage Costume"
                    price = {69.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81H0QSKyjPL._AC_UL320_SR224,320_.jpg"
                    rating = {10}                    
                    />
                    <Product 
                    title = "WWE Undertaker Mens Costume Undertaker Costume for Men"
                    price = {74.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71JGLTPrqhL._AC_UL320_SR224,320_.jpg"
                    rating = {10}                    
                    />
                </div>

                <div className = "home__row">
                    <Product 
                    title = "WWE The Undertaker Mask Standard"
                    price = {69.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81uQIesXIbL._AC_UL320_SR224,320_.jpg"
                    rating = {20}                    
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
