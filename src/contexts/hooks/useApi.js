import firebaseCon from "../../services/firebase";

export const useApi = () =>({

    signin: async(email, password) =>{
        try {
            return await firebaseCon.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            return error.message;
        }
        
    },

    signout: async() =>{
        try {
            return await firebaseCon.auth().signOut();

        } catch (error) {
            return error.message;
        }

    }
});
