import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<div className="outer d-flex align-items-center justify-content-center">
				<div className="inner">
					<Login />
				</div>
			</div>
			<ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
		</div>

	);
}

export default App;
