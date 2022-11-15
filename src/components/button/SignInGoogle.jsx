import React from "react";
import GoogleButton from "react-google-button";

import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const handleSignInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

const SignInGoogle = () => {
    return (
        <div className={style.signInWrapper}>
            <GoogleButton onClick={handleSignInGoogle} />
        </div>
    );
};

export default SignInGoogle;

const style = {
    signInWrapper: `flex justify-center`,
};
