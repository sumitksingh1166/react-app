import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  // firstName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password:Yup.string().required('password is Required')
});


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
    },

    validationSchema : LoginSchema
    
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
              <span style={{color: 'red',fontSize:'0.7em', marginLeft:10}}>{ loginForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value ={loginForm.email} />

              <label htmlFor="">Password</label>
              <span style={{color: 'red',fontSize:'0.7em', marginLeft:10}}>{ loginForm.errors.password}</span>
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