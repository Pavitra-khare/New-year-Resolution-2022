import React from 'react'
import "./Todo.css"
export default function Todo(props) {
    return (
        <>
            <div className="task">
                <button className='delete'
                onClick={()=>{
                    props.func(props.id);
                }
                }>X</button>
                <li>{props.text}</li>
            </div>
        </>
    )
}
