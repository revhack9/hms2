import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
// import Edit from './Edit';
// import { patientsData } from '../../data';



function Dashboard() {
    const patientsData=[];
    const [patients, setPatients] = useState(patientsData);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [patient] = patients.filter(patient => patient.id === id);

        setSelectedPatient(patient);
        setIsEditing(true);
    }

    // const handleDelete = (id) => {
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'No, cancel!',
    //     }).then(result => {
    //         if (result.value) {
    //             const [patient] = patients.filter(patient => patient.id === id);

    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Deleted!',
    //                 text: `${patient.name}'s data has been deleted.`,
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             });

    //             setPatients(patients.filter(patient => patient.id !== id));
    //         }
    //     });
    // }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        patients={patients}
                        // handleEdit={handleEdit}
                        // handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    patients={patients}
                    setPatients={setPatients}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {/* {isEditing && (
                <Edit
                    patients={patients}
                    selectedPatient={selectedPatient}
                    setPatients={setPatients}
                    setIsEditing={setIsEditing}
                />
            )} */}
        </div>
    )
}

export default Dashboard;