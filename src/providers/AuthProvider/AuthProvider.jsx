import { createContext } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // google auth
    const handleGoogleAuth = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //creating user
    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //user login
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authentications = {
        handleGoogleAuth,
        handleCreateUser,
        handleLogin,
    };

    return (
        <AuthContext.Provider value={authentications}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;
