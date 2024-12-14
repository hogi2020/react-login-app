import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 클래스 선언
class AuthLogic {
    constructor() {
        this.auth = getAuth()
        this.googleProvider = new GoogleAuthProvider()
    }
}
export default AuthLogic


// 로그아웃 버튼 클릭시 호출하기
export const logout = (auth) => {
    return (null)
}


// 구글 로그인
export const loginGoogle = (auth, googleProvider) => {
    console.log("loginGoogle 호출 성공")
}