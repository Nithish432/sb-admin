import "./App.css";
import { useState } from "react";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AddUser from "./components/AddUser";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from "./components/EditUser";

function App() {

  let data = {
    earningsMonthly:"4,00,000",
    earningsAnnual:"45,00,000",
    task:"80",
    pendingRequest:18,
  }

  let [users,setUsers] = useState([
    {
      name: "Nithish Kumar K",
      email: "knithish432@gmail.com",
      batch: "2019-23",
      mobile: "9884123622",
    },
    {
      name: "Dhanireddy venkata Nandha Kishore",
      email: "dhanireddy9052@gmail.com",
      batch: "2019-23",
      mobile: "9052835513",
    },
    {
      name: "Shzyam Sundar L",
      email: "shzyams@gmail.com",
      batch: "2019-23",
      mobile: "9360357311",
    },
    {
      name: "Padmanaban T",
      email: "padmanabanvpm01@gmail.com",
      batch: "2019-23",
      mobile: "9344663737",
    },
  ])

  return <>
  <div id="wrapper">
    <BrowserRouter>
       <Sidebar/>

       <Routes>
          <Route path="/dashboard" element={<Dashboard data={{data,users,setUsers}}/>}/>
          <Route path="/add-user" element={<AddUser data={{users,setUsers}}/>}/>
          <Route path="/edit-user/:id" element={<EditUser data={{users,setUsers}}/>}/>
          <Route path="*" element={<Navigate to="/add-user"/>}/>
       </Routes>

    </BrowserRouter>

    
  </div>
  </>
}

export default App;
