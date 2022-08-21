import React, { useState } from "react";
import { BsPersonCircle, BsFillPersonCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";


function ForgotPassword() {
    const [username, setUsername] = useState("");

    const handleForgotPassword = (e) => {
		e.preventDefault();

        if (!username) toast.error("Please enter your username or password")
        else toast.success("Successfully, please check your email")
        console.log("handleForgotPassword")
    }

    return (
        <div>
            <form onSubmit={handleForgotPassword}>
                <div className="text-center mb-5">
                    <BsFillPersonCheckFill size={90} style={{color: "white"}}/>
                </div>

                <div className="input-group mb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <BsPersonCircle size={24} />
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username or Email"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <p style={{fontSize: "12px"}} className="mt-2">
                        Please enter your username or email address and we'll send you instruction on how to reset your password
                    </p>
                </div>

                <div className="input-group mb-4">
                    <button type="submit" className="btn custom-button w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;