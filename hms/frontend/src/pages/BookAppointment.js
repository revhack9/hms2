// import React, { useState, useRef, useEffect,useNavigate } from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import "../assets/css/addBook.css";
// import AdminNavbar from '../components/AdminNavbar';
// import Swal from 'sweetalert2';
// import { URL } from "../components/Constant";
// import axios from 'axios';

// function BookAppointement() {

    
//     const [doctorName, setDoctorName] = useState('');
//     const [patientName, setPatientName] = useState('');
//     const [date, setDate] = useState('');
//     const [description, setDescription] = useState('');
//     const textInput = useRef(null);
//     const token = localStorage.getItem("jwt");

//     useEffect(() => {
//         textInput.current.focus();
//     }, [])

//     const bookAppointment = e => {
//         e.preventDefault();
//         if (!doctorName || !patientName || !description || !date) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'All fields are required.',
//                 showConfirmButton: true
//             });
//         }
//         const newPatient = {
//             doctorName,
//             patientName,
//             description,
//             date, 
//         }
//         // patients.push(newPatient);
//         // setPatients(patients);
//         // setIsAdding(false);
//         axios.post(`${URL}/api/hms/receptionist/addAppointment/${doctorId}/${patientId}`,newPatient,{
//             headers:{
//                 Authorization: `Bearer ${token}`,
//             },
           
            
//         })
//         .then((response) => {
//             //changeState(response.data);
//           })
//         .catch((error) =>{
//             console.log(error);
//         });
       
//         Swal.fire({
//           icon: 'success',
//           title: 'Added!',
//           text: `${patientName}'s appointment successful.`,
//           showConfirmButton: false,
//           timer: 1500
//       });
//       window.location.href="/receptionistDashboard"
//     };
//    return (
       
//       <div className='bookAppointment'>
//            <AdminNavbar />
//         <div className="small-container">
//             <form onSubmit={bookAppointment}>
//                 <h1 className={'receptionistHeader'}>Book Appointment</h1>        
//                 <Form.Label htmlFor="doctorName">Doctor Name</Form.Label>
//                 <Form.Select size="lg" aria-label="Default select example"  
//                     id="doctorName"
//                     type="text"
//                     ref={textInput}
//                     name="doctorName"
//                     value={doctorName}
//                     onChange={e => setDoctorName(e.target.value)}>
//                   <option>Select Doctor</option>
//                   <option value="Doctor 1">Doctor 1</option>
                  
//                 </Form.Select>

//                 <label htmlFor="patientName">Patient Name</label>
//                 {/* <Form.Label htmlFor="patientName">Patient Name</Form.Label> */}
//                 <Form.Select size="lg" aria-label="Default select example"  
//                     id="patientName"
//                     type="text"
//                     ref={textInput}
//                     name="patientName"
//                     value={patientName}
//                     onChange={e => setPatientName(e.target.value)}>
//                   <option>Select Patient</option>
//                   <option value="Patient 1">Patient 1</option>
                  
//                 </Form.Select>

//                 <Form.Label htmlFor="description">Description</Form.Label>
//                 <Form.Control
//                   type="text"
//                   as="textarea"
//                   className="tarea"
//                   placeholder="Enter text"
//                   id="description"
//                   name="description"
//                   value={description}
//                   onChange={e => setDescription(e.target.value)}
                  
//                 ></Form.Control>


             
//                 <label htmlFor="date">Date</label>
//                 <input
//                     id="date"
//                     type="date"
//                     name="date"
//                     value={date}
//                     onChange={e => setDate(e.target.value)}
//                 />
//                 <div style={{ marginTop: '30px' }}>
//                     <Button variant="primary" type="submit"
//                      >Book Appointment
//                         </Button>
//                     <Button variant="danger" 
//                         style={{ marginLeft: '12px' }}
//                         className="muted-button"
//                         type="button" onClick={() => {
//                           window.location.href = "/receptionistDashboard";
//                             }}>Cancel</Button>
//                 </div>
//             </form>
//         </div>
//       </div>
//     );
// }

// export default BookAppointement