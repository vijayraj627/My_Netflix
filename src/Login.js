import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [sign, setSign] = useState(true)

    const changeSign = () => {
        setSign(!sign);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
            alt="Image not found"/>
            </div>
            <form className="bg-black bg-opacity-80 p-12 mx-auto left-0 right-0 my-36 absolute w-3/12">
                <h1 className="text-gray-100 font-bold text-3xl m-4">{sign ? "Sign In" : "Sign Up"}</h1>
                {!sign && <input type="text" placeholder="Full Name" className="m-2 p-4 w-full bg-neutral-900 rounded-xl"/>}
                <input type="text" placeholder="Email or Mobile Number" className="m-2 p-4 w-full bg-neutral-900 rounded-xl"/>
                <input type="password" placeholder="Password" className="m-2 p-4 w-full bg-neutral-900 rounded-xl"/>
                <button className="m-2 p-2 w-full bg-red-600 rounded-xl text-white font-bold">{sign ? "Sign In" : "Sign Up"}</button>
                <p className="text-white p-4 cursor-pointer" onClick={changeSign}> {sign ?  "New to Netflix? Sign Up" : "Already a user? Sign In"} now</p>
            </form>
        </div>
    )
}

export default Login;