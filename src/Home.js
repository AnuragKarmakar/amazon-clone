import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                   src="https://m.media-amazon.com/images/I/71c4TzyYnaL._SX3000_.jpg"
                    alt=""
                />
            <div className= "home__row">
                
                <Product 
                id="1"
                title='JBL Headphones'
                price={1400}
                image='https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_UY218_.jpg'
                rating={4}
                />
                <Product
                id="6"
                title='Samsung Z Flip'
                price={84000}
                image="https://m.media-amazon.com/images/I/714aupYQsaL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
            </div>

            <div className= "home__row">
                <Product 
                    id="2"
                    title='Royal Enfield Escapade Helmet: Hybrid helmet Genuine RE Accessory'
                    price={3400}
                    image="https://m.media-amazon.com/images/I/71MZI3DlrfL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}/>
                <Product
                    id="3"
                    title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)'
                    price={1949}
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}/>
                    
                <Product
                    id="4"
                    title='Logitech G 304 Lightspeed Wireless Gaming Mouse, Hero Sensor, 12,000 DPI,'
                    price={2495}
                    image="https://m.media-amazon.com/images/I/51VpABY-b6L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                    />
            </div>

            <div className= "home__row">
                <Product
                    id = "5"
                    title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                    price={156900}
                    image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg'
                    rating={4}
                />
            </div>

            <div className= "home__row">
                <Product
                    id = "5"
                    title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                    price={156900}
                    image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg'
                    rating={4}
                />
            </div>
            <div className= "home__row">
                <Product
                    id = "5"
                    title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                    price={156900}
                    image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg'
                    rating={4}
                />
            </div>
            <div className= "home__row">
                <Product
                    id = "5"
                    title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                    price={156900}
                    image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg'
                    rating={4}
                />
            </div>
        </div>
    </div>
    )
}

export default Home
