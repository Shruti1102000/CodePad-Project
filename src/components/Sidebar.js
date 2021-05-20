import Button from './Button';
import'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal } from 'bootstrap';
import db from './firedb';
import Popup from './Popup';
import { propTypes } from 'react-bootstrap/esm/Image';
import {
	BrowserRouter as Router,
	
	Link
} from 'react-router-dom';
// Required for side-effects
require("firebase/firestore");
const firebase = require("firebase");
const Sidebar = ({addcode,email}) => {
    const [isOpens, setIsOpens] = useState(false);
    const [isOpenv, setIsOpenv] = useState(false);
    const [fnames , setfnames] =useState('');
    const [fnamev , setfnamev] =useState('Default');
  const [fnameo,setfnameo] =  useState({});
    let ids=new Array(100);
    const togglePopup1 = () => {
      setIsOpens(!isOpens);
    }
    
    const togglePopup2 = () => {
      setIsOpenv(!isOpenv);
    }
   
    const onClick1s =() =>{
        /*console.log(code);
        console.log(email);*/
        togglePopup1();
        }

   
    const onClick2 = () =>{
      addcode(fnames);
      togglePopup1();
    }
    const onClickvf = () =>{
      //open file in codeIDE


    }
   const onClickv = () =>
    {
      togglePopup2();
      retrievedata();

    }
    const retrievedata = () => {
      console.log("HIGH!");
      console.log(email);
      /*var docRef = db.collection("users").doc(email).collection("Programs").doc(fnamev);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});*/

var i=0;
 db.collection("users").doc(email).collection("Programs").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    ids.push(doc.data().Filename);
    setfnameo(...fnameo,{
      Filename:
      doc.id,
      Codex:doc.data().Code
    })
      console.log(doc.id, " => ", doc.data().Code);
  });
});
console.log(fnameo);
    }

    return (
        <div className='sidebar'>

            {/* <input value="User" width="10" className="btn" /> */}
            <img className="class-rounded" src="./def-user.png" height="95px" width="95px" id="user-img"/>
            <Button color='' text='View' onClick={onClickv}/>
            {isOpenv && <Popup
      content={<>
        {/* <b>Enter Name of the file you want to view</b> */}
        {/* <input type="text" value={fnamev} onChange={(e) => {
          console.log(e.target.value);
          setfnamev(e.target.value)}}/> */}
        {/*get data from database and show it as a list*/}
        <select value={fnamev} onChange={(e)=>setfnamev(e.target.value)} className="dpdown">
      {ids.forEach(element => {
         <option value={element}>{element}</option>
      })}
     
      
    </select>
        
        <button className="btn btn-outline-primary" onClick={onClickvf}>View</button>
      </>}
      handleClose={togglePopup2}
    />}
            <Button color='' text='Save' onClick={onClick1s}/>
            {isOpens && <Popup
      content={<>
        <b>Enter Name of the file</b>
        <input type="text" value={fnames} onChange={(e) => {setfnames(e.target.value)}}/>
        
      
  
 

        <button className="btn btn-outline-primary" onClick={onClick2}>Save</button>
      </>}
      handleClose={togglePopup1}
    />}
           <Link to='/App2' className="btn-lg btn-dark btn">Collaborate</Link>
            <Button color='' text='Share' onClick={onClick2}/>
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
