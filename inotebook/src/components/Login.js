import React, { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom';
import logo from '../img/logo.png'
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem('token', json.authtoken)
      props.showAlert("Logged in Successfully", "success")
      navigate("/")
    } else {
       props.showAlert("Inavalid login credentials", "warning")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
   <div className="row">
           <div className="col-12 text-center mb-4">
             <h1 className="display-5"> <strong>Welcome back to the</strong>  <img src={logo} alt="notebook" className="img-fluid"style={{ maxHeight: '50px' }} /> </h1>
           </div>
           </div>
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="text-center my-2">
              <h3>Login </h3> <hr />
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email Address</label>
                  <input  type="email" className="form-control" id="email"
                    name="email" aria-describedby="emailHelp" value={credentials.email}
                    onChange={onChange} placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"> Password  </label>
                  <input type="password" className="form-control" id="password"
                    name="password" value={credentials.password} onChange={onChange} placeholder="Enter your password" required />
                </div>
                <div className="text-center">
                  <p>Don't have an Account? <Link className="text" to="/signup" >Sign up here</Link></p>
                </div>
                <div className=" d-flex justify-content-center">
                  <button type="submit" className="btn btn-success rounded-pill"> Submit</button>
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

export default Login
