import React from 'react';
// import logo from './logo.svg';
import './App.css';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

function App() {

  const [ user, setUser ] = useState({});


  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: ", response)
    let userObj = jwt_decode(response.credential)
    console.log(userObj)
    setUser(userObj)
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("cuteCatPic").hidden = false;
  }
  
  // const elloGuvnah = () => {
  //   console.log("elloGuvnah!!")
  // }

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

  const handleSignOut = (e) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("cuteCatPic").hidden = true;
  }

//if we have no user: signIn Button
//if we have user: logOut Button
  return (
    <>
    <div className="App">
      <header className="App-header">

      <div id="signInDiv"></div>
      {Object.keys(user).length > 0 && 
        <div>
          <button onClick={e=>handleSignOut()} style={{fontWeight:"bolder"}}>LEAVE</button>
        </div>
      }

      <p id="cuteCatPic" hidden={true}>CUTE CAT PIC</p>

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
