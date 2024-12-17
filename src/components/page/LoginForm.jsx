import React, { useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { loginGoogle } from '../../service/firebase'
import { authLogic } from '../../service/authLogic'
import { useNavigate } from 'react-router'

const LoginForm = ({ authLogic }) => {

    // 특정 경로로 이동하는 Hook 메서드 // navigate("/login")
    const navigate = useNavigate()
    const [usrId, setUserId] = useState()

    const goToMaker = userId => {
        navigate({
            pathname: '/marker',
            state: {id: userId}
        })
    }

    const onLogin  = async() => {
        // authLogic에 있는 로그인 함수 호출함
        try {
            const user = await loginGoogle(authLogic.auth, authLogic.googleProvider)
            console.log(user)
            localStorage.setItem("userId", user.uid)
            // 구글 인증 후, 응답으로 받은 프로필 정보에서 userId값을 꺼낸다.
            setUserId(user.uid)
            // user.uid가 존재하면 (참이면 1, 안녕, 내일봐)
            if(user.uid) {
                goToMaker(user.uid)
            }
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