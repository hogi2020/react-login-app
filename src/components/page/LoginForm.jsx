import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { loginGoogle } from '../../service/firebase'
import { authLogic } from '../../service/authLogic'

const LoginForm = () => {

    const onLogin  = async() => {
        try {
            const user = await loginGoogle(authLogic.auth, authLogic.googleProvider)
            console.log(user)
            localStorage.setItem("userId", user.uid)
            // setUserId(user.uid)
        } catch(error) {
            console.log("로그인 오류")
        }
    }

    return (
        <div className="login">
            <Header />
            <section>
                <h1>Login</h1>
                <ul>
                    <li>
                        <button className="btnLogin" onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button className="btnLogin">Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    )
}

export default LoginForm