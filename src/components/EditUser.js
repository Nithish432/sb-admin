import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom'

function EditUser(props) {

    let params = useParams();
    let navigate = useNavigate()
    
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [batch, setBatch] = useState("");
    let [mobile, setMobile] = useState("");

    useEffect(()=>{
        if(params.id<=props.data.users.length){
            setName(props.data.users[params.id].name)
            setEmail(props.data.users[params.id].email)
            setBatch(props.data.users[params.id].batch)
            setMobile(props.data.users[params.id].mobile)
        }
        else{
            navigate("/dashboard")
        }
    },[navigate,params.id,props.data.users])

    /*
    without dependency array - will be triggered whenever the component renders
    useEffect(()=>{
        //do something
    })

    with empty dependency array - will be triggered only for the first time when a component renders
    useEffect(()=>{
        //do something
    })

    with dependency array - will be triggered everytime when the dependent state value changes
    useEffect(()=>{
        //do something
    },[name,email])
     */

    let handleSubmit = () => {
        let newData = { name, email, batch, mobile }
        //take a deep clone of the state
        let data = [...props.data.users]
        //replace the data to the new clone
        data.splice(params.id,1,newData)
        //update the state with the new cloned variable
        props.data.setUsers(data)

        navigate("/dashborad")

    }
    return <>
        <div className="mx-auto col-8">
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(element) => setName(element.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(element) => setEmail(element.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(element) => setBatch(element.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile.No" value={mobile} onChange={(element) => setMobile(element.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default EditUser