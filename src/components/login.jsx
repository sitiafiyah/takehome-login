import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./home";
import Registration from "./registration";
import { BsPersonCircle, BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { toast } from "react-toastify";
import ForgotPassword from "./forgot-password";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [logged, setLogged] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [registered, setRegistered] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        let passwordSession, usernameSession = "";

        if (localStorage.getItem("password")) passwordSession = localStorage.getItem("password").replace(/"/g, "");
        if (localStorage.getItem("username")) usernameSession = localStorage.getItem("username").replace(/"/g, "");


        if (!username) {
            toast.error("Username is required")
        } else if (!password) {
            toast.error("Password is required")
        } else if (password !== passwordSession || username !== usernameSession) {

            console.log(password, passwordSession, "password")
            console.log(username, usernameSession, "username")
            toast.error("Invalid username and password")
        } else {
            toast.success("Login success!")
            setLogged(true)
        }
    }

    const handleRegister = () => {
        setRegistered(!registered);
    }

    const handleForgotPassword = () => {
        setForgotPassword(true);
        setRegistered(true)
        setLogged(false)
    }

    console.log("register", registered, "logged", logged)

    return (
        <div>
            {registered && !logged && !forgotPassword ? 
                <form onSubmit={handleLogin}>
                    <div className="text-center mb-5">
                        <BsPersonCircle size={90} style={{color: "white"}}/>
                    </div>

                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <BsFillPersonFill size={24} />
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <BsFillLockFill size={24} />
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <input type="checkbox" style={{ marginTop: "13px" }} />
                            <p onClick={() => { }} className="forgot-password ms-2" style={{color: "white"}}>
                                Remember me
                            </p>
                        </div>
                        <div >
                            <p onClick={handleForgotPassword} className="forgot-password text-right link">
                                <i> Forgot Password? </i>
                            </p>
                        </div>
                    </div>

                    <div className="input-group mb-4">
                        <button type="submit" className="btn w-100 custom-button">
                            LOGIN
                        </button>
                    </div>

                    <div className="text-center">
                        <p onClick={handleRegister} className="have-account">
                            Don't have an account? <span className="link"> Register </span>
                        </p>
                    </div>
                </form>
            : null
            }
            {!registered && !forgotPassword ? <Registration /> : null}
            {forgotPassword && !logged && registered ? <ForgotPassword /> : null}
            {registered && logged ? <Home username={username}/> : null}
        </div>
    );
}

export default Login;