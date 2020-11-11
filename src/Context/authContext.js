import React from 'react'
import firebase from "../Config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => 
{
    // const [currentUser, setCurrentUser] = React.useState(null);
    // const [pending, setPending] = React.useState(true);
    const [user, loading, error] = useAuthState(firebase.auth());

    

    if(loading)
    {
        return(
            <>
                Loading...
            </>
        )
    }

    if(error)
    {
        return(
            <>
                {error}
            </>
        )
    }

    return(
        <AuthContext.Provider
        value={{
            currentUser : user
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}