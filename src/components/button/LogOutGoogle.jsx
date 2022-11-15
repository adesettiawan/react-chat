import React from "react";
import { auth } from "../../firebase";

const signOut = () => {
    signOut(auth);
};

const LogOutGoogle = () => {
    return (
        <button onClick={() => auth.signOut()} className={style.button}>
            Log Out
        </button>
    );
};

export default LogOutGoogle;

const style = {
    button: `bg-red-600 text-white hover:shadow-lg px-6 py-3 hover:ring-2 hover:ring-red-800`,
};
