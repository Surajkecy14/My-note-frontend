import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function LoginAccount({alert}) {
     const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const submitForm = async(e)=>{
        e.preventDefault(); 
        //  calling api to login
          const response = await axios.post("https://my-note-backend.vercel.app/auth/loginAccount",{
            email,
            password
          },{withCredentials:true})
            
          if(response.data=== "login sucessfull"){
                navigate('/')
                alert(" login sucessfull ", "success");
          }
          else{
            alert(" email or password invalid ", "danger");
          }
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login Account</h3>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login Account</button>
        </form>
      </div>
    </div>
  );
}
