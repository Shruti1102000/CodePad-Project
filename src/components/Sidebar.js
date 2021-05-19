import Button from './Button';
import'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal } from 'bootstrap';
import db from './firedb';
import Popup from './Popup';
// Required for side-effects
require("firebase/firestore");
const firebase = require("firebase");
const Sidebar = ({addcode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [fname , setfname] =useState('');
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    const onClick1 =() =>{
        /*console.log(code);
        console.log(email);*/
        addcode(fname);
        
        togglePopup();


    }

    return (
        <div className='sidebar'>

            {/* <input value="User" width="10" className="btn" /> */}
            <img className="class-rounded" src="./def-user.png" height="95px" width="95px" id="user-img"/>
            <Button color='' text='View' onClick={onClick1}/>
            <Button color='' text='Save' onClick={onClick1}/>
            {isOpen && <Popup
      content={<>
        <b>Enter Name of the file</b>
        <input type="text" value={fname} onChange={(e) => {setfname(e.target.value)}}/>
        <button className="btn btn-outline-primary" onClick={onClick1}>Save</button>
      </>}
      handleClose={togglePopup}
    />}
            <Button color='' text='Collaborate' onClick={onClick1}/>
            <Button color='' text='Share' onClick={onClick1}/>
            {/* <Button color='' text='Logout' onClick={onClick}/> */}
           { /*<Modal show={show} onHide={onClick1}>
                <Modal.Header>Enter Nmae of file</Modal.Header>
                <Modal.Body>
                    <input type="text" value="File Name" />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-danger" onClick={onClick1}>Close</button>
                    <button className="btn btn-outline-primary" onClick={onClick1}>Save</button>
                </Modal.Footer>
      </Modal>*/}
        </div>
    )
}

export default Sidebar
