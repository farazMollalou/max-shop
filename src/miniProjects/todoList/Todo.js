import React, { useEffect, useState } from 'react'

export default function Todo(props) {
    
    function changeStatusFunc(id) {
        props.onChangeStatusFunc(id)
    }

    function todoRemoverFunc(id) {
        props.onRemoveTodo(id)
    }

    let classList = (props.isDone) ? 'todo completed' : 'todo'
    return (
        // 'completed' class for completed todos
        <div className={classList} style={{ display: 'flex' }} >
            <li className="todo-item">{props.title}</li>

            <button className="check-btn" onClick={() => changeStatusFunc(props.id)}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={() => todoRemoverFunc(props.id)}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}