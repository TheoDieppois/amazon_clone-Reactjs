import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import { getBasketTotal } from './reducer'

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Sous-Total ({basket.length} articles) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> Cette commande contient un cadeau
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"€"}
            />
            <button>Procéder au paiement</button>
        </div>
    )
}

export default Subtotal
