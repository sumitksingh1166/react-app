import React, { useState } from 'react'

const StateManagement = () => {

    let count = 1;

    const [ like , setLike]= useState(1);

    

    return (
        <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />
            <button 
            className='btn btn-primary mt-4' 
            onClick={() => { 
                count++; 
                
                console.log(count);
                }}
                >
                    Add Count
                    </button>
                    <h1>{count}</h1>

                    <button
                    className='btn btn-success mt-5'
                    onClick = {() =>setLike(like+1)}>
                        update state

                    </button>
                    <h1>{like}</h1>

        </div>
    );
};

export default StateManagement;