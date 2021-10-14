import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthetication from "../Pages/Login/Firebase/firebase.init";


initializeAuthetication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
       setIsLoading();
       const googleProvicer = new GoogleAuthProvider();

      return signInWithPopup(auth, googleProvicer)
       .then(result => {
           setUser(result.user);
       })
       .finally(() => setIsLoading(false));
     }

    //  observe user state change

     useEffect( () =>{
     const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
               setUser(user);
           }
           else{
               setUser({})
           }
           setIsLoading(false)
       });
       return() => unsubscribed;
     }, []);

     const logOut = () => {
         setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading());
     };
     
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut, 
        setUser
    };
}

export default useFirebase;
