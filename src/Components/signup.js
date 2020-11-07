import React from 'react';
import { useNavigate } from 'react-router';
import firebase from "../Config/firebase";

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = React.useCallback(
        async e => {
            e.preventDefault();
            const [email, password] = e.target.elements;
            
            console.log("email", email.value)
            console.log("email", email.value)
            try
            {
                await  firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                navigate("/home")
            }catch(error)
            {
                alert(error)
            }
        },
        [navigate]
    )

    function vv()
    {
        console.log("VV called")
    }

    vv()

    return (
        <div>
            <h1>Welome Signup</h1>

            <form onSubmit={handleSubmit} >
                <label>
                    <input type="email" name="email" placeholder="Email" />
                </label> <br />
                <label>
                    <input type="password" name="password" placeholder="Password" />
                </label> <br />

                <button type="submit" >Login</button>
            </form>

        </div>
    );
};

export default Signup;