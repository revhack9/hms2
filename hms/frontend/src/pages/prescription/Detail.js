import { Form , Button } from "react-bootstrap";

// import {PatientContext} from './context/PatientContext';
import {useContext, useState} from 'react';

 

const Detail = ({thePatient}) => {
    
    const id = thePatient.id;

    const [name ,setName] = useState(thePatient.name);
    const [disease, setDisease] = useState(thePatient.disease);
    const [detail, setDetail] = useState(thePatient.detail);

    // const {updatePatient} = useContext(PatientContext);
    
    const updatedPatient = {id,name,disease,detail}

    const handleSubmit = (e) => {
        e.preventDefault();
        // updatePatient(id,updatedPatient)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3}
                    placeholder="detail"
                    name="detail"
                    value = {detail}
                    onChange={(e) => setDetail(e.target.value)}
                    
                />
            </Form.Group>
 
            <Button variant="success" type="submit" block>
                Add
            </Button>
        </Form>
    )
}

export default Detail;