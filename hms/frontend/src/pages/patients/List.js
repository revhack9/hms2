import React from 'react'
// import Button from 'react-bootstrap/Button'
function List({ patients }) {

    return (
        <>
        <div className='contain-table'>
            <table className='striped-table'>
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
                    {patients.length > 0 ? (
                        patients.map((patient, i) => (
                            <tr key={patient.id}>
                                <td>{i + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.email}</td>
                                <td>{patient.mobile_no}</td>
                                <td>{patient.address} </td>
                                <td>{patient.disease} </td>
                                <td>{patient.gender} </td>
                                <td className="text-right">
                                    {/* <Button
                                        onClick={() => handleEdit(patient.id)}
                                        className="button muted-button"
                                    >
                                        Update
                                    </Button> */}
                                </td>
                                <td className="text-left">
                                    {/* <Button
                                        variant='danger'
                                        onClick={() => handleDelete(patient.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button> */}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Patients</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
        </>
    )
}

export default List