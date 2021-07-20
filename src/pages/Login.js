import React, {useState} from 'react'
import "./Login.css";
import logo from './../img/facebook.svg';
import googleLogo from './../img/google_icon-icons.com_62736.svg';
import {auth, provider, firebaseApp} from './../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignInEmail = async () => {
        await auth.createUserWithEmailAndPassword(email, password).then((result) =>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)

        }).catch((error) => alert(error.message));
    }

    const logOut = async () => {
        await auth.signOut();
    }

    const logIn = async () => {
        await auth.signInWithEmailAndPassword(email, password).then( (result) =>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)

        }).catch((error) => alert(error.message));
    }

    const signIn = () => {
        //Sign in...
        auth.signInWithPopup(provider).then(result => {
            

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            
            <div className="login__info">
        
                <img className="login__facebook-logo" src={logo} alt="" />
                <h2>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
      
             </div>
      
            <div className="login__right">

                <div className="login__form">

                    <div className="login__form__top">
                        <form action="">
                            <input className="login__input" onChange={ (ev) => setEmail(ev.target.value)} type="text" placeholder="email address or phone number"/>
                            <input className="login__input" onChange={ (ev) => setPassword(ev.target.value)} type="text" placeholder="password" />
                            <button onClick={logIn} className="login__btn1">Log In</button>
                            <a href="/#">Did you forget your password?</a>
                        </form>
                    </div>

                    <div className="login__form__bottom">
                        <button className="login__btn2">Sign In</button>
                        
                        <button type="submit" onClick={signIn} className="login__btn3"> <span><img src={googleLogo} style={{height: '18px'}} alt="" /></span> Sign in with Google</button>
                    </div>

                </div>

                <div className="login__form__footer">
                    <p><span>Crea una página</span> para un personaje público, un grupo de música o un negocio.</p>
                </div>

                

            </div>

            
        </div>
    )
}

export default Login
