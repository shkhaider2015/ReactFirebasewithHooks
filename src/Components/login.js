import React from 'react';

const login = () => {

    const handleSubmit = () => 
    {
        
    }

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

export default login;