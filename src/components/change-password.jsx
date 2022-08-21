import React, { useState } from "react";
import { BsFillLockFill, BsFillPersonCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";


function ChangePassword({ changePassword }) {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const handleChangePassword = (e) => {
        e.preventDefault();
        let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let tmpPassword = localStorage.getItem("password").replace(/"/g, "");

        console.log(tmpPassword, newPassword)

        if (!oldPassword) toast.error("Old Password is required")
        else if (!newPassword) toast.error("New Password is required")
        else if (oldPassword !== tmpPassword) toast.error("Old Password invalid")
        else if (newPassword === oldPassword) toast.error("The new password cannot be the same as the old password")
		else if(!passwordRegex.test(newPassword)) toast.error("Password must min 8 character long, contain Uppercase, Lowercase, Numeric and special character")
        else {
            localStorage.setItem("password", JSON.stringify(newPassword));
            toast.success("Change password successfully")
            window.location.reload();
        }
    }

    return (
        <div>
            <form onSubmit={handleChangePassword}>
                <div className="text-center mb-5">
                    <BsFillPersonCheckFill size={90} style={{ color: "white" }} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <BsFillLockFill size={24} />
                        </span>
                    </div>
                    <input
                        type="oldPassword"
                        className="form-control"
                        placeholder="Old Password"
                        onChange={(event) => setOldPassword(event.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <BsFillLockFill size={24} />
                        </span>
                    </div>
                    <input
                        type="newPassword"
                        className="form-control"
                        placeholder="New Password"
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
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

export default ChangePassword;