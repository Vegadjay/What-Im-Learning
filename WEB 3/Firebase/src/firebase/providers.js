import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebaseConfig';

const auth = getAuth(app);

export const SignInWithEmail = async (email, password) => {
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        return newUser.user;
    } catch (err) {
        console.error("Error signing in:", err.message);
        throw new Error(err.message);
    }
};
