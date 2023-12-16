// // import './App.css';

// // function App(classname="main") {
  // //   return (
// //     <div>
// //       <table>
// //     <tr>
// //       <td>
// //         <form>
// //           <label for="rollNumber">Roll Number:</label>
// //           <input type="text" id="rollNumber" name="rollNumber" />
// //           <br /><br />

// //           <label for="name">Name:</label>
// //           <input type="text" id="name" name="name" />
// //           <br /><br />

// //           <label for="dob">Date Of Birth:</label>
// //           <input type="date" id="dob" name="dob" />
// //           <br /><br />

// //           <label for="email">Email:</label>
// //           <input type="email" id="email" name="email" />
// //           <br /><br />

// //           <label for="phone">Phone Number:</label>
// //           <input type="text" id="phone" name="phone" />
// //           <br /><br />

// //           <p>
// //             <label>Gender:</label>
// //             <input type="radio" id="male" name="gender" value="male" />
// //             <label for="male">Male</label>
// //             <input type="radio" id="female" name="gender" value="female" />
// //             <label for="female">Female</label>
// //             <input type="radio" id="others" name="gender" value="others" />
// //             <label for="others">Others</label>
// //           </p>
// //           <input type="Submit"></input>
// //         </form>
// //       </td>
// //     </tr>
// //   </table>
// //     </div>
// //   );
// // }

// // export default App;


// import FunctionalCom from "./component/FunctionalCom.js";
// import ClassCom from "./component/ClassCom.js";
// import OneExport from "./component/OneExport.js";
// import PropsFunctional from "./Day4/PropsFunctional.js";
// import PropsClass from "./Day4/PropsClass.js";
// import ArrowProps from "./Day4/ArrowProps.js";
// import StateClassCom from "./Day4/StateClassCom.js";
// import StateFunction from "./Day4/StateFunction.js";
// import StateHoldObject from "./Day4/StateHoldObject.js";
// import DynamicRendering from "./Day4/DynamicRendering.js";
// import ParentChildCommunication from "./Day4/ParentChildCommunication.js";
// import TwoWayBinding from "./Day4/TwoWayBinding.js";
// import DefaultProps from "./Day4/DefaultProps.js";
//  export default function App()
//  {
  //   return(
    //     <div>
//       {/* <PropsFunctional college="SKCT" place="CBE"></PropsFunctional>
//       <PropsClass college="SKCT"></PropsClass>
//       <ArrowProps place="INDIA"></ArrowProps>
//       <StateClassCom/>
//       <StateFunction/>
//       <StateHoldObject/>
//       <ParentChildCommunication/>
//       <DynamicRendering/>
//       <TwoWayBinding/>
//       <DefaultProps name="India"></DefaultProps>
//       <DefaultProps/> */}
//     </div>
//   )
//  }








// import airImage from './air.jpeg';

// import React from 'react';
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
// import Navigate from './React Project/Navigate.js';
// import Login from './React Project/Login.js';
// import SignUpForm from "./React Project/Stock.js";
// function App() {
//   return (
//     <div className="App">
//     <h1>STOCK  MANAGEMENT  SYSTEM </h1>
//     {/* <Login/> */}
//       <BrowserRouter>
//     <Navigate></Navigate>
//         <Routes>
//           <Route path='/login' element=<Login></Login> ></Route>
//           <Route path='/signup' element=<SignUpForm></SignUpForm> ></Route>
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;











// import Log from './Day5/Log';
// import Signup from './Day5/Signup';
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
// import Navigate from './Day5/Navigate';
// <Navigate/>
// <BrowserRouter>
// <ul>
//   <li>
//     <Link to="/login">Login page</Link>
//   </li>
//   <li>
//     <Link to="/signup">Signup page</Link>
//   </li>
// </ul>
// <Routes>
//   <Route path="/login" element= <Log/> > </Route>
//   <Route path="/signup" element= <Signup/> > </Route>
// </Routes>
// </BrowserRouter>

import React from 'react';
// import List from './Day6/List';
// import ListDemo from './Day6/ListDemo';
// import BasicButtons from './Day6/DemoButton';
// import IconLabelButtons from './Day6/DemoButton1';
import ErrorBoundary from './component/Day8/ErrorBoundary';
import Car from './component/Day8/Car';
import TryCatch from './component/Day8/TryCatch';
import LifeCycle from './component/Day8/LifeCycle';
export default function App() {
  return (
    <div>
      {/* <List></List>
      <ListDemo></ListDemo>
      <BasicButtons></BasicButtons>
      <IconLabelButtons></IconLabelButtons>
      <h1 style={{backgroundColor:"cadetblue"}}>Hi</h1> */}


    {/* <ErrorBoundary>
    <Car carName="Thar"></Car>
    </ErrorBoundary> */}

    {/* <TryCatch fruit="Onion"></TryCatch> */}

    <LifeCycle></LifeCycle>

    </div>
  );
}