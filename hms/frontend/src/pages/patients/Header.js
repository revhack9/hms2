import React from 'react'
import Button from 'react-bootstrap/Button'
function Header({ setIsAdding }) {
    return (
        <header>
            <h1 className={'receptionistHeader'}>Add Patient</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <Button onClick={() => setIsAdding(true)} className={'round-button'} size="lg">Add Patient</Button>
                <Button onClick={() => { window.location.href = "/receptionistDashboard"}} className={'backBtn'} size="lg">Back</Button>
            </div>
        </header>
    )
}

export default Header