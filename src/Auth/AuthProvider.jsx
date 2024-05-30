/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateProfileUser = (name, photoURL) =>{
        setLoading(true)
     return   updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect( () =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        //   console.log('currentuser',currentUser);
          setUser(currentUser)
          if(currentUser){
            const userInfo ={
                email: currentUser.email
            }
             axiosPublic.post('/jwt', userInfo)
             .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
             })
          }

          else{
            //  todo:remove token
            localStorage.removeItem('access-token')
          }
          setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }

        
    },[axiosPublic])

    const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateProfileUser,
    googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;