import React from 'react';

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, passwordRepeat, setPasswordRepeat, clearInputs} = props;

    return (
        <>
            <section className="login">
                        {hasAccount ? (
                            <div className="login-form">
                                <label> E-mail address </label>
                                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                                <p className="errorMsg"> {emailError} </p>

                                <label> Password </label>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                                <p className="errorMsg"> {passwordError} </p>

                                <button onClick={handleLogin}> Sign In </button>
                                <p> Don't have an account ?
                                    <span onClick={() => {setHasAccount(!hasAccount); clearInputs()}}> Sign Up </span>
                                </p>
                            </div>
                        ) : (
                            <div className="register-form">
                                <label> E-mail address </label>
                                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                                <p className="errorMsg"> {emailError} </p>

                                <label> Password </label>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                                <p className="errorMsg"> </p>

                                <label> Repeat password </label>
                                <input type="password" required value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)}/>
                                <p className="errorMsg"> {passwordError} </p>

                                <button onClick={handleSignUp}> Sign Up </button>
                                <p> Already have an account ?
                                    <span onClick={() => {setHasAccount(!hasAccount); clearInputs()}}> Sign In </span>
                                </p>
                            </div>
                        )}
            </section>
        </>
    )
};

export default Login;