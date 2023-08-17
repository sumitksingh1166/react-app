import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Signup = () => {

  

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: ""
    },

    

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'WellDone!',
          text: 'Registered Successfully 😎'
        })
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }

      // write code to submit form to server
    }
  });

  return (





    <div style={{
      backgroundImage: `url("/abcd.jpg")`,
      backgroundSize: 'cover',
      minHeight: '100vh',


    }}>
      <div className="w-25 container d-flex justify-content-center">
        <div className="card mt-4 mb-4">
          <div className="card-body">
            <h3 className="text-center">Sign-up Form</h3>
            <hr />

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{signupForm.errors.name}</span>
              <input type="text" className="form-control mb-3" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />

              <label htmlFor="">Email Address</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{signupForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />

              <label htmlFor=""> Creating Password</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{signupForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />

              <label htmlFor=""> Confirm Password</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{signupForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />

              <label htmlFor="">Age</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{signupForm.errors.age}</span>
              <input type="number" className="form-control mb-3" name="age" onChange={signupForm.handleChange} value={signupForm.values.age} />

              {/* <input value="test" type="checkbox" onChange={handleChange} /> */}
              {/* apply check box */}

              <div>
                <input value="text" type="checkbox" />
                <span>Yes i accept the <a href="#">Terms of Services</a> and Privacy</span>
              </div>



              <button className="btn btn-primary w-100 mt-5">Sign up</button>

              <span>Already Registered?<a href="http://localhost:3000/login">login</a></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;