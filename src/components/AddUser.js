import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser(props) {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [batch,setBatch] = useState("");
  let [mobile,setMobile] = useState("");

  let navigate = useNavigate()

  let handleSubmit = ()=>{
    let newData = {name,email,batch,mobile}
    //take a deep clone of the state
    let data = [...props.data.users]
    //push the data to the new clone
    data.push(newData)
    //update the state with the new cloned variable
    props.data.setUsers(data)

    navigate("/dashborad") 
  }

  return <>
    <div className="mx-auto col-8">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(element)=>setName(element.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(element)=>setEmail(element.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch" onChange={(element)=>setBatch(element.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile.No" onChange={(element)=>setMobile(element.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  </>
}

export default AddUser