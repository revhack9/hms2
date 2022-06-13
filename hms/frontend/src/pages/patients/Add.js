import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button'

function Add({ patients, setPatients, setIsAdding }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [mobile_no, setMobileNumber] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [disease,setDisease] = useState('');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        
        if (!name || !email || !age || !mobile_no|| !address || !gender || !disease) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
            
        }
        else if(age<=0){
            return Swal.fire({
                icon:'info',
                title:'Error!',
                text:'Enter your age',
                showCloseButton:true

            })
        }
        else if(mobile_no.length<10){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Enter valid mobile number.',
                showCloseButton:true
            })
        }
        else if(mobile_no.length>10){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Enter valid mobile number.',
                showCloseButton:true
            })
        }
        else if(!regex.test(email)){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Enter valid email address.',
                showCloseButton:true
            })
        }
        else if(name.length<3){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Name must contain more than 2 characters.',
                showCloseButton:true
            })
        }
        const id = patients.length + 1;
        const newPatient = {
            id,
            name,
            email,
            age,
            mobile_no,
            address,
            gender,
            disease
            
        }
        patients.push(newPatient);
        setPatients(patients);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Patient</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
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
                    <Button variant="primary" size="lg" type="submit" className={'addPatientButton'} value="Add Patient" >Add Patient</Button>
                  
                    <Button
                        size="lg"
                        style={{ marginLeft: '12px' }}
                        variant='danger'
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    >Cancel</Button>
                </div>
            </form>
        </div>
    );
}

export default Add