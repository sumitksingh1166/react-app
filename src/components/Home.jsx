import React from 'react'
import mylogo from '../logo.svg'

const Home = () => {
    return (
        <div style={{backgroundImage :`url("/abc.jpg")`,
        backgroundSize :'cover',
        minHeight:'100vh',
        
    
    }}>
        
            <h1 className='text-center mb-4' style={{color: 'white'}}>Welcome to Homepage</h1>
            <hr  style={{color:'white'}}/>
            
        <h1 className='myclass text-center'>My React app</h1>
        <input type='text'  />
        <h2 style={{ color: 'yellow', fontSize: 40}} className='text-center'> using Inline css</h2>
        <img src="/logo192.png" alt="" />
        {/* <img src="/background.webp" alt="" />
        <img src="/image2.jpg" alt="" /> */}


        <img src={mylogo} alt="" />


        </div>
    )
}

export default Home;