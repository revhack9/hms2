import {useContext, useState, useEffect} from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Detail from './Detail';

const Feedback = ({patient}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    },[patient])


    return (
        <>
        <td>{patient.name}</td>
        <td>{patient.disease}</td>
        <td>{patient.detail}</td>
        <td>
            <button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i><h>Add Prescription</h></button>
        </td>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Feedback
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Detail thePatient={patient}/>
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

export default Feedback;