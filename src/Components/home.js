import React from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/authContext'
import firebase from "../Config/firebase";

const Home = () => {

    const { currentUser } = React.useContext(AuthContext);
    const navigate = useNavigate();
    

    React.useEffect(
        () => 
        {
            console.log("CurrentUser --> ", currentUser)
            if(!currentUser)
            {
                navigate("/login")
            }
        },
        [currentUser, navigate]
    )

    const handleClick = () =>
    {
        firebase
        .auth()
        .signOut();
    }

    return (
        <div>
            <h1>-----Welome Home -------</h1>
            <button onClick={handleClick} >Signout</button>
        </div>
    );
};

export default Home;