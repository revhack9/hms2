import React,{useState, useEffects} from 'react'
import AdminNavbar from '../components/AdminNavbar'
import '../assets/css/appointments.css'
import axios from 'axios'
function Appointments() {

    const[data,setData] = useState([]);
    
    //URL 
    const URL="http://localhost:8080";
    //token
    const token = localStorage.getItem("jwt");




//     useEffects(()=>{
//     axios.get(`${URL}/api/hms/doctor/appointment`,{
//         headers:{
//             Authorization: `Bearer ${token}`,
//         },
//     })
//     .then(response => {
//             setData(response.data);
//     });
// },[]);
//     console.log(data);

    // const getAppointments = () => {
    //     axios
    //       .get(`${URL}/api/hms/doctor/appointment`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       })
    //       .then((response) => {       
    //         console.log(response.data);  
    //         setData(response.data);     
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    
    return (
        <>
        <AdminNavbar/>
        <div className='contain-table'>
            <h1>Appointments</h1>
           
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Appointment Id</th>
                        <th>Date</th>
                        <th>Doctor Id</th>
                        <th>Patient Id</th>
                        <th>Description</th>
                    </tr>     
                </thead>
                <tbody>
                    {data.map((appointments)=>(
                        <tr key={appointments.id}>
                        <td> {appointments.id} </td>
                        <td> {appointments.date} </td>
                        <td>{appointments.doctor_id}</td>
                        <td>{appointments.patient_id}</td>
                        <td>{appointments.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
        </>
    )
}

export default Appointments