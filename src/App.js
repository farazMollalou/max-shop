import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'

// book list project 
import AddForm from './miniProjects/BookList/AddForm';
import Header from './miniProjects/BookList/Header/Header';

// shopping cart project 
import Shop from './miniProjects/shopping-cart/Shop';

// todo-list project
import TodoList from './miniProjects/todoList/TodoList';

// sending a func as a prop
// import Exercise from './miniProjects/exer1/parent';

// online ticket website
import Ticket from './miniProjects/Ticket/Ticket';

// note app project
import NoteApp from './miniProjects/note-app/NoteApp';
import NoteList from './miniProjects/NoteList/NoteList';
import UseRefExer from './miniProjects/UseRefExer/UseRefExer';
import Pagination from './miniProjects/Pagination/Pagination';
import LayoutExer from './miniProjects/use_layout_exer/layout_exer';
import FoodMenu from './miniProjects/FoodMenu/FoodMenu';

// custom hook
// import useFetch from './hooks/CustomHook';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <div className="page-container">
              <h1 style={{ color: 'black' }}>Hello my flend!</h1>
              <hr /><hr /><hr />
              <div className="btn-box">
                <Link style={{ fontSize: 24, margin: 40 }} to="/shop">Shop</Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/todo-list">ToDo</Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/ticket">ticket</Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/useRef">useRef</Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/pagination">pagination</Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/note-app">note-app </Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/noteList">note-list (useMemo) </Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/layout">layout </Link>
                <Link style={{ fontSize: 24, margin: 40 }} to="/foodMenu">Food Menu </Link>
              </div>
            </div>

          </>
        } />
        <Route path='/todo-list' element={<TodoList></TodoList>} />
        <Route path='/ticket' element={<Ticket></Ticket>} />
        <Route path='/useRef' element={<UseRefExer />} />
        <Route path='/shop' element={<Shop></Shop>} />
        <Route path='/book-list' element={<><Header></Header><AddForm></AddForm></>} />
        <Route path='/note-app' element={<NoteApp></NoteApp>} />
        <Route path='/noteList' element={<NoteList />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/layout' element={<LayoutExer />} />
        <Route path='/foodMenu' element={<FoodMenu />} />
      </Routes>

    </>
  )
}