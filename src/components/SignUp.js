import React, {useState} from 'react'
import './SignUp.css';
import CloseIcon from '@material-ui/icons/Close';

import {auth, provider, firebaseApp} from './../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function SignUp() {

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

    return (
        <div className="signUp">
            
            <div className="signUp__top">

                <div className="signUp__top__left">
                    <h3>Registrarte</h3>
                    <p>Es rapido y facil.</p>
                </div>
                
                <div className="signUp__top__right">
                    <CloseIcon />
                </div>

            </div>

            <div className="signUp__bottom">

                <div className="signUp__form__name">
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Apellido' />
                </div>
                <input onChange={ (ev) => setEmail(ev.target.value)} type="text" placeholder='Numero de celular o correo electronico' />
                <input onChange={ (ev) => setPassword(ev.target.value)} type="text" placeholder='Contraseña nueva' />
                <div className="signUp__form__birthdate">
                    <p>Fecha de nacimiento</p>
                    <select name="Day" id="day">
                        <option value="1">1</option>
                    </select>
                    <select name="Month" id="month">
                        <option value="jun">jun</option>
                    </select>
                    <select name="Year" id="year">
                        <option value="2021">2021</option>
                    </select>
                </div>
                <p>Sexo</p>
                <div className="signUp__form__sex">
                    <div className="signUp__checkbox">
                        <p>Mujer</p>
                        <input type="checkbox" name="Mujer" id="mujer" />
                    </div>
                    <div className="signUp__checkbox">
                        <p>Hombre</p>
                        <input type="checkbox" name="Hombre" id="hombre" />
                    </div>
                    
                </div>
                
                <p className='signUp__footer'>Al hacer click en "Registrarte", aceptas nuestras Condiciones, la politica de datos y la politica de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras</p>

                <button onClick={SignInEmail} type='submit'>Registrarte</button>


            </div>

        </div>
    )
}

export default SignUp
