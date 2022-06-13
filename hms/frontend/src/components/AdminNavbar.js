import React, { useContext } from "react";
import "../assets/css/dashboard.css";
import logo from "../assets/imgs/user-icon.png";
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'



const AdminNavbar = () => {
	return  (
		<div className={"Adminnavbar"}>
			<div className={"nav-container"}>
			<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
			</h1>
			</div>
			<Dropdown as={ButtonGroup}>
			<Dropdown.Toggle split variant="dark" id="dropdown-custom-2"><img className={"user-logo"} src={logo}/></Dropdown.Toggle>
			<Dropdown.Menu className="super-colors">
      		<Dropdown.Item eventKey="1" id="logout" onClick={() => {
						            window.location.href = "/";
					                }}>Logout</Dropdown.Item>

    		</Dropdown.Menu>
		</Dropdown>
     	    
			
		</div>
	) ;
};

export default AdminNavbar;
