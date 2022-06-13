import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../components/Constant.js";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar"
import Swal from 'sweetalert2';

const ViewPatient = () => {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${URL}/api/hms/receptionist/getPatient`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPatients(response.data);
        });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  const getAllPatients = () => {
    axios
      .get(`${URL}/api/hms/receptionist/getPatient`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {       
        console.log(response.data);  
        setPatients(response.data);     
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePatient = (patientId) => {
          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `Patient's data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });
          window.location.href="/viewPatients"   
 
    axios
      .delete(`${URL}/api/hms/receptionist/delete/${patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getAllPatients();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AdminNavbar/>
      <div className="container">
        <h2 className="text-center"><strong>Patients List </strong></h2> <br />
        <Link to="/addPatients" className="btn btn-primary mb-2">
          Add Patient
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/receptionistDashboard" className="btn btn-danger mb-2">
          Back
        </Link>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Disease</th>
                        <th>Gender</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td> {patient.id} </td>
                  <td> {patient.name} </td>
                  <td>{patient.age}</td>
                  <td>{patient.email}</td>
                  <td>{patient.mobile_no}</td>
                  <td>{patient.address}</td>
                  <td>{patient.disease}</td>
                  <td>{patient.gender}</td>

                  <td>
                    <Link
                      className="btn btn-success"
                      to={`/updatePatients/${patient.id}`}
                      // to={`/updatePatients`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePatient(patient.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
