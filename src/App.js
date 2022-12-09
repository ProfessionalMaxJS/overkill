import React from 'react';
import logo from './logo.svg';
import './App.css';

const elloGuvnah = () => {
  console.log("elloGuvnah!!")
}

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={elloGuvnah} />
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
        </a>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div id="g_id_onload"
         data-client_id="YOUR_GOOGLE_CLIENT_ID"
         data-login_uri="https://your.domain/your_login_endpoint"
        //  data-auto_prompt="false"
         >
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
          </header>
        </div>
</>
  );
}

export default App;
