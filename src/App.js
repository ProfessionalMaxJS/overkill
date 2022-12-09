import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: ", response)
  }
  
  const elloGuvnah = () => {
    console.log("elloGuvnah!!")
  }

  useEffect(()=>{
    /*woah, comments can affect the linter?*/
    /*global google*/
    google.accounts.id.initialize({
      client_id: "40106880815-qal4sep4j5395s40la133a9nm900ac47.apps.googleusercontent.com",
      // callback: elloGuvnah
      callback: handleCallbackResponse
    })
    
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, [])


  return (
    <>
    <div className="App">
      <header className="App-header">

      <div id="signInDiv"></div>

        {/* <img src={logo} className="App-logo" alt="logo" onClick={elloGuvnah} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
          </header>
        </div>      


        
</>
  );
}

export default App;
