import React from 'react';
import { useNavigate } from 'react-router';
import firebase from "../Config/firebase"

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = React.useCallback(
        async e => {
            e.preventDefault();
            const [email, password] = e.target.elements;

            try
            {
                await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                navigate("/home");
                
            }catch(err)
            {
                alert(err)
                console.error(err)
            }
        },
        []
    )

    return (
        <div>
            <h1>Welome Login</h1>

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

export default Login;