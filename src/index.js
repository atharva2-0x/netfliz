import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDom from "react-dom";  
import App from "./App";
import { FirebaseContext } from "./context/FirbaseContext";
import { firebase } from "./lib/firebase.prod";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
       <FirebaseContext.Provider value={{ firebase }}>
         <App />
       </FirebaseContext.Provider>
    );


// ReactDom.render(
//   <>
//     <FirebaseContext.Provider value={{ firebase }}>
//       <App />
//     </FirebaseContext.Provider>
//   </>,
//   document.getElementById("root")
// );
