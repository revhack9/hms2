import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

import Login from "./containers/Login";
import HomePage from "./components/Home";
import Signup from "./containers/Signup";
import AddPatient from "./pages/AddPatient";
import ReceptionistLogin from "./containers/ReceptionistLogin";
import ReceptionistDashboard from "./containers/ReceptionistDashboard";
import DoctorDashboard from "./containers/DoctorDashboard";


const App = () => {

	return (
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<HomePage/>} />
						<Route path="/login"element={<Login />}/>
						<Route path="/signup"element={<Signup />}/>
						<Route path="/doctorDashboard"element={<DoctorDashboard />}/>
						<Route path="/receptionistLogin"element={<ReceptionistLogin/>}/>
						<Route path="/addPatients"element={<AddPatient/>}/>
						<Route path="/receptionistDashboard" element={<ReceptionistDashboard />}/>
					</Routes>
				</div>
			</Router>
	);
};

export default App;
