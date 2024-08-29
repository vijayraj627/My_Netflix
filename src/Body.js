import { Provider } from "react-redux";
import Browse from "./Browse";
import Login from "./Login";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/fireBase";

const Body = () => {

    const AppRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "browse",
            element : <Browse/>
        }
    ])

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
        });
    },[])
    return (
        <div>
            <Provider store={store}>
            <RouterProvider
                router={AppRouter}
            />
            </Provider>
        </div>
    )
}

export default Body;