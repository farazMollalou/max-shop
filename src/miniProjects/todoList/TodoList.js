import React, { useState, useEffect } from 'react'
import Header from './Header'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all')

    useEffect(() => {
        console.log('updated!')
    }, [])

    function statusInputHandler(event) {
        // this.setState({ status: event.target.value })
        setStatus(event.target.value)
    }
    function changeInputHandler(event) {
        // this.setState({ todoTitle: event.target.value })
        setTodoTitle(event.target.value)
    }
    function addTodo(event) {
        event.preventDefault()
        let newTodo = {
            isDone: false,
            title: todoTitle,
            id: todos.length
        }
        // this.setState(prevState => {
        //     return { todos: [...prevState.todos, newTodo] }
        // })
        setTodos(prevTodos => {
            return [...prevTodos, newTodo]
        })
        // this.setState({ todoTitle: '' })
        setTodoTitle('')
    }
    function changeStatusFunc(id) {
        let selected_todo_index = todos.findIndex(item => item.id === id)
        let updated_todoList = [...todos]
        updated_todoList[selected_todo_index].isDone = !(updated_todoList[selected_todo_index].isDone)
        // this.setState({ todos: updated_todoList })
        setTodos(updated_todoList)
    }
    function todoRemover(id) {
        let selected_todo_index = todos.findIndex(item => item.id === id)
        let updated_todoList = [...todos]
        updated_todoList.splice(selected_todo_index, 1)
        // this.setState({ todos: updated_todoList })
        setTodos(updated_todoList)
    }

    return (
        <>
            <section className='todo-container'>
                <Header />
                <form onSubmit={event => addTodo(event)}>
                    <input type="text" className="todo-input" maxLength="40" onChange={(event) => changeInputHandler(event)} value={todoTitle} />
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={event => statusInputHandler(event)} value={status}>
                            <option value="all">All</option>
                            <option value="done">Done</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {todos.length === 0 && <h1>EMPTY! 😊</h1>}
                        {status === 'all' && (
                            todos.map(todo =>
                                <Todo {...todo} key={todo.id} onChangeStatusFunc={changeStatusFunc} onRemoveTodo={todoRemover}></Todo>
                            )
                        )}
                        {status === 'done' && (
                            todos.filter(todo => todo.isDone).map(todo => (
                                <Todo {...todo} key={todo.id} onChangeStatusFunc={changeStatusFunc} onRemoveTodo={todoRemover}></Todo>
                            ))
                        )}
                        {status === 'uncompleted' && (
                            todos.filter(todo => !todo.isDone).map(todo => (
                                <Todo {...todo} key={todo.id} onChangeStatusFunc={changeStatusFunc} onRemoveTodo={todoRemover}></Todo>
                            ))
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}