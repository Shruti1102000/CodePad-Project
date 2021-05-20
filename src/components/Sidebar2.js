import Button2 from './Button2';
import {
	BrowserRouter as Router,
	
	Link
} from 'react-router-dom';
var x= window.location.href;
const Sidebar2 = () => {
    
    const onClick =()=>{
    console.log('click')
}

    return (
        <div className='sidebar'>
        
        {/*} <input value="User" width="10" className="btn" />  
          <img className="class-rounded" src="./def-user.png" height="95px" width="95px" id="user-img"/> */ }
            <Button2 color='' text='View' onClick={onClick}/>
            <Button2 color='' text='Save' onClick={onClick}/>
            <Button2 color='' text='Collaborate' onClick={() => alert("Share this link to collaborate!",{x})}/>
            {/* <Button color='' text='Share' onClick={onClick}/> */}
            <Link to="/login" className="btn btn-dark btn-lg">Back</Link>
        </div>
    )
}

export default Sidebar2
