import { useFormik } from "formik";
import React from "react";

const Login = () => {
  
  //Initializing formik
  const loginForm = useFormik( {
    initialValues:{
      email :"",
      password :""
    },

    onSubmit : ( values) => { 
      console.log(values);
    //write code to submit form to server
    }
    
  });



  return (
    <div>
      <div className="w-25">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form onSubmit = {loginForm.handleSubmit}>
              <label htmlFor="">Email Address</label>
              <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value ={loginForm.email} />

              <label htmlFor="">Password</label>
              <input type="password" className="form-control mb-3" name="password" onChange={loginForm.handleChange} value ={loginForm.password} />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;