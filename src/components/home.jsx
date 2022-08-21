import React from "react";
// import { BsBoxArrowInRight } from "react-icons/bs";

function Home({ username }) {
    // const handleLogout = () => {
    //     localStorage.removeItem("username");
    //     localStorage.removeItem("password");
    // }

    return <>
        {/* <div className="text-end ms-3 me-3 mb-4">
            <p onClick={handleLogout} className="have-account">
                <BsBoxArrowInRight size={25}/>  <span className="fs-26 link"> Logout </span>
            </p>
        </div> */}
        <div className="text-center mb-4">
            <h1>Hello, {username} !</h1>
        </div>

    </>
}

export default Home;