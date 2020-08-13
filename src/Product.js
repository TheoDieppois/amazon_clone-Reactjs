import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'

const Product = ({id, title, image, price, rating}) => {

    const [{basket, user}, dispatch] = useStateValue()

    const history = useHistory()

    const addToBasket = () => {
        if(user) {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id,
                    title,
                    image,
                    price,
                    rating
                }
            })
        } else {
            history.push("/login")
        }
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                            <p>⭐️</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=""/>
            <button
                onClick={addToBasket}
            >
                Add to basket
            </button>
        </div>
    )
}

export default Product
