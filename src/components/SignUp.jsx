// 
import React from 'react'

const Signup = () => {
  return (
    <div className='container d-flex justify-content-center mt-5 text-white '>
    <div className='card col-md-4 fw-bold bg-info text-white'>
      <div className='card-header'>
        <h1 className='text-center'>SIGNUP</h1>
      </div>
      <div className='card-body fw-bold text-center'>
        <label htmlFor="Email"> Email </label> <br />
        <input type="email" />

        <br /> <br />

        <label htmlFor="Password"> Password </label> <br />
        <input type="text" />

        <br /><br />

        <label htmlFor="Password"> Confirm Password </label> <br />
        <input type="password" />

        <br /><br />

        <button className='mybtn bg-transparent text-white rounded-3'>SIGNUP</button>

      </div>
    </div>
    </div>
  )
}

export default Signup