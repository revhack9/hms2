import React, { useContext, useEffect, useState } from "react";
import "../assets/css/dashboard.css";
import { URL } from "./Constant";
import axios from "axios";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { white } from '@mui/material/colors';
import Button from 'react-bootstrap/Button';
import logo from "../assets/imgs/hms-logo8.png";

const AdminNavbar = () => {
	const token =localStorage.getItem("jwt");
	const[email, setEmail]=useState("");
	useEffect(()=> {
		axios.get(`${URL}/api/hms/user`,{
			headers:{
				Authorization:`Bearer ${token}`,
			},
		})
		.then((response) =>{
			console.log(response.data);
			setEmail(response.data);
		});
	},[]);
	return  (
		<div className={"Adminnavbar"}>
			<div className={"nav-container"}>
			<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					<img className={"hms-logo"} src={logo} />
					HMS
			</h1>
			</div>
			<ul>
			<h1 className={"nav-user"}>Welcome !!! {email.split('@')[0]} </h1>
			
			</ul>
		<ul>
		< AccountBoxIcon
			  color="primary"
			  sx={{ fontSize: 65}}/>
		<Button variant="outline-light" className="logoutButton" onClick={() => {
			window.location.href = "/";
			}}><h5>Logout < LogoutIcon 
			sx={{ fontSize: 25}}/></h5></Button>
		</ul>	
		</div>
	) ;
};

export default AdminNavbar;
