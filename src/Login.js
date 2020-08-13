import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link> 

            <div className="login__container">
                <h1>S'identifier</h1>
                <form>
                    <h5>Adresse e-mail</h5>
                    <input 
                        value={email}
                        type="email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Mot de passe</h5>
                    <input 
                        value={password}
                        type="password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className="login__signInButton"
                        onClick={login}
                    >
                        Continuer
                    </button>
                </form>

                <p>En continuant, vous acceptez les conditions d'utilisation et la notice Protection de vos informations personnelles d'Amazon.</p>

                <button 
                    type="submit"
                    className="login__registerButton"
                    onClick={register}
                >
                    Créer votre compte Amazon
                </button>
            </div>
        </div>
    )
}

export default Login
