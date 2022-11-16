import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInGoogle from "../button/SignInGoogle";
import LogOutGoogle from "../button/LogOutGoogle";

const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className={style.navBar}>
            <h1 className={style.heading}>My Chats</h1>
            {!user ? <SignInGoogle /> : <LogOutGoogle />}
        </div>
    );
};

export default Navbar;

const style = {
    navBar: `bg-slate-900 flex justify-between items-center p-4 h-20`,
    heading: `text-white text-xl`,
};
