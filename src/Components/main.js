import React from 'react';
import { Link } from 'react-router-dom';

const main = () => {
    return (
        <div>
            <h1>Welome main</h1>
            <Link to="/login" > <button>Login</button> </Link>
            <Link to="/signup" > <button>Signup</button> </Link>
            
            
            
        </div>
    );
};

export default main;