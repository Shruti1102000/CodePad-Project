import Button from './components/Button'
function App() {

  return (
    <div className="page">
      <nav className="navbar navbar-light bg-light fixed-top">
            <img className="navbar-brand " src="./code_logo.png" alt="" height='75px' width= '100px'/>
            <h2>Code Pad : A Collaborative Code Editor </h2>
              
            <Button id='log' color='' text='Sign in / Sign up' />
       </nav>
       <video src="coding.mp4" muted loop autoPlay ></video>
    </div>
  );
}

export default App;