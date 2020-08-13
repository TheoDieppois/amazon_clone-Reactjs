import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import "./Header.css"
import { auth } from './firebase'

const Header = () => {

    const [searchInputValue, setSearchInputValue] = useState('')

    const [{ basket, user }] = useStateValue()

    const login = () => {
        if(user) {
            auth.signOut()
        }
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            alert('Désolé mais la barre de recherche est la juste pour décorer ^^')
            setSearchInputValue('')
        }
    }

    const search = () => {
        alert('Désolé mais la barre de recherche est la juste pour décorer ^^')
        setSearchInputValue('')
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header__search">
                <input 
                type="text" 
                className="header__searchInput" 
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                onKeyDown={pressEnter}/>
                <SearchIcon className="header__searchIcon" onClick={search}/>
            </div>


            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Bonjour {user?.email},</span>
                        <span className="header__optionLineTwo">{user ? 'Déconnectez-vous' : 'Identifiez-vous'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Retours</span>
                        <span className="header__optionLineTwo">et Commandes</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Testez</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className=""/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>     
    )
}

export default Header
