import React, { useState } from "react";
import { BsBoxArrowInRight, BsFillLockFill } from "react-icons/bs";
import ChangePassword from "./change-password";

function Home({ username }) {
    const [changePassword, setChangePassword] = useState(false);
    const name = localStorage.getItem("name").replace(/"/g, "")

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        window.location.reload();
    }

    return <>
        {
            username && !changePassword ? <div>
                <div className="text-end ms-3 me-3 mb-4">
                    <p onClick={handleLogout} className="have-account">
                        <BsBoxArrowInRight size={25} />  <span className="fs-26 link"> Logout </span>
                    </p>
                </div>
                <div className="text-center mb-4" style={{ color: "white" }}>
                    <h1>Hello, {name} !</h1>
                </div>
                <div className="text-center mb-4" style={{ color: "white" }}>
                    <button className="btn custom-button" onClick={() => setChangePassword(true)}>
                        Change Password
                    </button>
                </div>
            </div> : null
        }

        {
            changePassword && <ChangePassword changePassword={changePassword}/>
        }
    </>

}

export default Home;