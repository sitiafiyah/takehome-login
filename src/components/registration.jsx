import React, { useState } from "react";
import Login from "./login";
import { BsFillPersonFill, BsEnvelopeFill, BsFillLockFill, BsPersonLinesFill, BsPersonBoundingBox } from "react-icons/bs";
import { toast } from "react-toastify";

function Registration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [login, setLogin] = useState(true);

	function handleFormSubmit(e) {
		e.preventDefault();
        let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let emailRegex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");

		console.log(passwordRegex.test(password), "regex")

		if(!name) toast.error("Full Name is required")
		else if(!username) toast.error("Username is required")
		else if(!email) toast.error("Email is required")
		else if(!emailRegex.test(email)) toast.error("Invalid email address")
		else if(!password) toast.error("Password is required")
		else if(!confirmPassword) toast.error("Confirm Password is required")
		else if(!passwordRegex.test(password)) toast.error("Password must min 8 character long, contain Uppercase, Lowercase, Numeric and special character")
		else if(password !== confirmPassword) toast.error("Password and confirm password do not match")
		else {
			localStorage.setItem("name", JSON.stringify(name));
			localStorage.setItem("email", JSON.stringify(email));
			localStorage.setItem("username", JSON.stringify(username));
			localStorage.setItem("password", JSON.stringify(password));
			console.log(localStorage.getItem("password"), localStorage.getItem("username"));

			setLogin(!login);
		}
	}

	function handleClick() {
		setLogin(!login);
	}

	return (
		<>
			<div>
				{login ? (
					<form onSubmit={handleFormSubmit}>
						<div className="text-center mb-5">
							<BsPersonLinesFill size={90} style={{color: "white"}}/>
						</div>

						<div className="input-group mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<BsPersonBoundingBox size={24} />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={(event) => setName(event.target.value)}
							/>
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

						<div className="input-group mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<BsEnvelopeFill size={24} />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Email Address"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>


						<div className="input-group mb-4">
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

						<div className="input-group mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<BsFillLockFill size={24} />
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</div>
						<div className="input-group mb-4">
							<button type="submit" className="btn custom-button w-100">
								Register
							</button>
						</div>

						<div className="text-center ms-3 me-3">
							<p onClick={handleClick} className="have-account">
								Already have an account? <span className="link"> Login </span>
							</p>
						</div>
					</form>
				) : (
					<Login />
				)}
			</div>

		</>
	);
}

export default Registration;