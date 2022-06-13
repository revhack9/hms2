import React from "react";
//import Login from "../containers/Login"
const Navbar = () => {
	return (
		<div className={"navbar"}>
			<div className={"nav-container"}>
				<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
				</h1>
			</div>

		</div>
	);
};

export default Navbar;
