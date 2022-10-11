import React from "react";
import Sidebar from "./sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">

    <a name="download"></a>
    <h2 id="heading"><u>Download And Install</u></h2><br></br>
    <h3>Downloading Node.js '.msi' Installer</h3>
    <p id="con">
    The first step to install Node.js on windows is to download the installer.<br></br><br></br>
    Visit the official Node.js website i.e) <a href="https:\\nodejs.org/en/download">Node JS</a> and download the .msi file according to your system environment (32-bit & 64-bit). An MSI installer will be downloaded on your system.
      <br></br>   <br></br>  
      <img id="dwnload" src="https://media.geeksforgeeks.org/wp-content/uploads/20190311152716/Capture120.png"></img>
    </p>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    
    
    <a name="install"></a>
    <h2 id="heading"><u>Install Packages</u></h2>
    <h3>Running The Node.js Installer</h3>
    <p id="con">Now you need to install the node.js installer on your PC. You need to follow the following steps for the Node.js to be installed:-

       Double click on the .msi installer.
       The Node.js Setup wizard will open.

      Welcome To Node.js Setup Wizard.<br></br>
      Select “Next”<br></br><br></br>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311153134/Capture212.png"></img>
      <br></br><br></br>
      After clicking “Next”, End-User License Agreement (EULA) will open.<br></br>
      Check “I accept the terms in the License Agreement”<br></br>
      <b>Select “Next”</b>
      <br></br><br></br><img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311153256/Capture34-2.png"></img><br></br><br></br>
      &raquo;<b><u>Destination Folder</u></b><br></br>
      Set the Destination Folder where you want to install Node.js & <b>Select “Next”</b><br></br><br></br>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311160231/Capture42.png"></img>
      <br></br><br></br>
      &raquo;<b><u>Custom Setup</u></b><br></br>
      <b>Select “Next”</b><br></br><br></br>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311160253/Capture51.png"></img><br></br><br></br>
      &raquo;<b><u>Ready to Install Node.js</u></b><br></br>
      <b>Select “Install”</b><br></br><br></br>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311160318/Capture61.png"></img><br></br><br></br>
      <b>A prompt saying – “This step requires administrative privileges” will appear.</b><br></br>
      Authenticate the prompt as an <u>“Administrator”</u>

      <br></br><br></br>
      <b><u><em>&gt;&nbsp;Do not close or cancel the installer until the install is complete</em></u></b><br></br><br></br>
      <b><u><em>&gt;&nbsp;Complete the Node.js Setup Wizard.</em></u></b>&nbsp;&nbsp;
      <b>Click "Finish"</b><br></br><br></br>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311160415/Capture71.png"></img>

    </p>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <a name="start"></a>
      <h2 id="heading"><u>Start Server</u></h2>
      <h3> Verify that Node.js was properly installed or not </h3>
      <p id="con">
      To check that node.js was completely installed on your system or not, you can run the following command in your command prompt or Windows Powershell and test it:-&nbsp;&nbsp;&nbsp;
             <b>C:\Users\Admin node -v</b>
             <br></br><br></br><img src="https://media.geeksforgeeks.org/wp-content/uploads/20190311160440/Capture81.png"></img>
             <br></br><br></br>
             If node.js was completely installed on your system, the command prompt will print the version of the node.js installed.
      </p>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      
      <a name="browse"></a>
      <h2 id="heading"><u>Browse Website</u></h2>
      <h3> Updating the Local npm version </h3>
      <p id="con">
      The final step in node.js installed is the updation of your local npm version(if required) – the package manager that comes bundled with Node.js.

      <br></br>You can run the following command, to quickly update the npm<br></br>

      <b>npm install npm –global</b> &nbsp;&nbsp;&nbsp;&nbsp;// Updates the ‘CLI’ client
      </p>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
  
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;