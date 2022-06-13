import {Modal, Button} from 'react-bootstrap';
import {useContext,useState } from 'react';
// import { PatientContext } from './context/PatientContext';
import Feedback from './Feedback';
import { useEffect } from 'react';

const PatientList = () => {

    // const {patients} = useContext(PatientContext);

    const [show,setShow] = useState(false);

    const handleshow = () => setShow(true);

    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    },[])
    return (
    
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h3><p>Prescription Page</p></h3>
            </div>
        </div>
    </div>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Disease</th>
                <th>Details</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
                {/* {
                    patients.map(patient => (
                        <tr key={patient.id}>
                            <Feedback patient={patient }/>
                        </tr>
                    ))
                } */}
            
        </tbody>
    </table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Patient
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
            <Button varient="secondary" onClick={handleClose}>
                Close Button
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default PatientList;