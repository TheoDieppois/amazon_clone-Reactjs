import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg" 
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="123"
                    title="Apple AirPods Pro"
                    price={229.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY436_FMwebp_QL65_.jpg"
                />

                <Product 
                    id="456"
                    title="Amazon Echo (3ème génération) Reconditionné Certifié, Enceinte connectée avec Alexa, Tissu anthracite"
                    price={89.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91B+xrXdD+L._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="789"
                    title="Samsung Galaxy S20 Ultra 5G 128Go Gris + BON D'ACHAT AMAZON - Smartphone Portable débloqué - Compatible Réseau Français - Ecran: 6,9 pouces - Double Nano SIM"
                    price={1199.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HmKUujkhL._AC_UY436_FMwebp_QL65_.jpg"
                />

                <Product 
                    id="1011"
                    title="Logitech MX Master 3 - Souris sans fil, défilement ultra-rapide, conception ergonomique, 4000 PPP "
                    price={109.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61qITGm5YIL._AC_UY436_FMwebp_QL65_.jpg"
                />

                <Product 
                    id="1213"
                    title="Nouveau Apple iPad Pro (12,9 pouces, Wi-Fi, 256 Go) - Gris sidéral (4e génération)"
                    price={1229.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81WhK5+gf2L._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>


            <div className="home__row">
                <Product 
                    id="1415"
                    title="Samsung LC49HG90DMU Ecran PC incurvé 49 pouces (124,5 cm) 3840 x 1080 pixels Double Full HD VA QLED, 1 ms, 350 cd/m², Noir"
                    price={829.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
