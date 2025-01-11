import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../img/logo.png'
const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = credentials
   const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password,}),
    }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem('token', json.authtoken)
      console.log(process.env.REACT_APP_API_BASE_URL)
      navigate("/")
      props.showAlert("Account created successfully", "success")
    } else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
     <div className="row ">
           <div className="col-12 text-center">
             <h1 className="display-5"> <strong>Welcome To</strong>  <img src={logo} alt="notebook" className="img-fluid"style={{ maxHeight: '50px' }} /> </h1>
           </div>
           </div>
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className=" text-center my-2">
              <h4>Sign Up</h4> <hr />
            </div>
            <div className="card-body my-0">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <label htmlFor="name" className="form-label" > Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" minLength={3} required onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email </label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"> Password </label>
                  <input type="password" className="form-control" name="password" id="password" placeholder="Generate password" minLength={5} required onChange={onChange} />
                </div>
                <div className="text-center">
                  <p>Already have an Account? <Link className="text" to="/login" >Log in here</Link></p>
                </div>
                <div className=" d-flex justify-content-center">
                  <button type="submit" className="btn btn-success">  Submit </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Signup
