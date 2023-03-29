import axios from 'axios';
import React, { useState, useMemo } from 'react'
import Filter from './Filter';
import './NoteList.css';

function NoteList() {

  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState(null)

  let newUser = {}

  function add() {
    newUser = { userName, pass, birthDay }
    setBirthDay('')
    setPass('')
    setUserName('')
    setUsers(pre => [...pre, newUser])
  }
  function fetchFunc() {
    axios.get(
      'https://jsonplaceholder.ir/posts'
    ).then((res) => {
      console.log(res.data[57].body)
      // setPosts(res)
    })
  }

  return (
    <>
      <div className="form-container">
        <h3  onClick={fetchFunc}>UseMemo</h3>
        <div className='sign-form'>
          <label htmlFor="userNameInput">userName :</label>
          <input type="text" id='userNameInput' value={userName} onChange={e => { setUserName(e.target.value) }} />
          <br />
          <label htmlFor="userPassInput">enter your password :</label>
          <input type="password" id='userPassInput' value={pass} onChange={e => setPass(e.target.value)} />
          <br />
          <br />
          <label htmlFor="birthDayInput">enter your birthday :</label>
          <input type="date" id='birthDayInput' value={birthDay} onChange={e => setBirthDay(e.target.value)} />
          <br />
          <br />
          <button onClick={add}>submit</button>
        </div>
        <div className="users-box">
          <ol>
            <Filter users={users}/>
          </ol>
        </div>
      </div>
    </>
  )
}

export default NoteList