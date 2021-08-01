import React, { useState } from 'react';

function LoginForm({ Login }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />                    
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" id="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />                    
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;
