import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { URL } from "../components/Constant.js";
import axios from "axios";
import Button from "react-bootstrap/Button"

const UpdatePatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [disease,setDisease] = useState("");
  

  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("jwt");
  
  
  const UpdatePatient = (e) => {
    e.preventDefault();
    const patient = {
      name,
      age,
      email,
      mobile_no,
      address,
      gender,
      disease
  };
    console.log(patient);
    console.log(token);    
    console.log(id);
      axios
        .put(`${URL}/api/hms/receptionist/update/${id}`, patient, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          navigate("/viewPatients");
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.href="/viewPatients"
  };

  useEffect(() => {
    if (token) {
      axios
        .get(`${URL}/api/hms/receptionist/getPatient`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setName(response.data.name);
          setAge(response.data.age);
          setEmail(response.data.email);
          setMobileNumber(response.data.mobile_no);
          setAddress(response.data.address);
          setDisease(response.data.disease);
          setGender(response.data.gender);
        });
    }
  }, []);
  console.log(name);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
          <div className="card-body">
          <form>
                <h1 className={'receptionistHeader'}>Update Patient</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="mobile_no">Mobile Number</label>
                <input
                    id="mobile_no"
                    type="number"
                    name="mobile_no"
                    value={mobile_no}
                    onChange={e => setMobileNumber(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="disease">Disease</label>
                <input
                    id="disease"
                    type="text"
                    name="disease"
                    value={disease}
                    onChange={e => setDisease(e.target.value)}
                />
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={e=> setGender(e.target.value)}>
                    <option value="Select">Select..</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div style={{ marginTop: '30px' }}>
                    <Button type="submit" size="lg" 
                        onClick={(e) => UpdatePatient(e)}
                    >
                        Update
                    </Button>
                    <Button
                        size="lg"
                        variant='danger'
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        onClick={()=>{
                          window.location.href="/viewPatients"
                        }}
                    >Cancel</Button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePatient;
