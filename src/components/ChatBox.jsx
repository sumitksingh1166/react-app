import React, { useState } from 'react'

const ChatBox = () => {

    const [todoList, setTodoList] = useState([]);


    const addNewTask = (e) => {
        // console.log(e.code);
        if (!e.target.value.trim()) return;
        if (e.code === 'Enter') {
            console.log(e.target.value)
            setTodoList([...todoList, { text: e.target.value, completed: false }]);
            //    e.target.value = "";
            console.log(todoList)
        }
    };



    return (
        <div>
            <div className='container'>
                <p className='display-4 fw-bold text-center'>Chat Box</p>
                <hr />

                <div className='card'>
                    <div className='card-header'>
                        <h4> ChatBox </h4>
                    </div>
                    <div className='card-body'>
                        <ul>
                            {todoList.map((obj, index) => {
                                return <li className='list-group-item'>
                                    <h6>{obj.text}</h6>
                                </li>;
                            })}
                        </ul>
                    </div>
                    <div className='card-footer'>

                        <input onKeyDown={addNewTask} className='form-control' placeholder='Write Message To Send' />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChatBox