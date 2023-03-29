import React, { useState } from 'react'
import Book from './Book'
import './Form.css'

export default function AddForm(props) {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")

    function titleChangeHandler(event) {
        // setState({ title: event.target.value })
        setTitle(event.target.value)
    }
    function authorChangeHandler(event) {
        // setState({ author: event.target.value })
        setAuthor(event.target.value)
    }
    function yearChangeHandler(event) {
        // setState({ year: event.target.value })
        setYear(event.target.value)
    }
    function submitHandler(event) {
        event.preventDefault()
        let newBook = {
            bookName: title,
            bookAuthor: author,
            publishYear: year,
            id: books.length + 1
        }
        setBooks(prevState => {
            return [...prevState, newBook]
        })

        // reset inputs 
        setAuthor('')
        setTitle('')
        setYear('')
    }

    return (
        <>
            <form id="book-form" autoComplete="off" onSubmit={(event) => submitHandler(event)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type={"text"} required id="title" className="form-control" value={title} onChange={(event) => titleChangeHandler(event)} />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type={"text"} required id="author" className="form-control" value={author} onChange={(event) => authorChangeHandler(event)} />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type={'date'} required id="year" className="form-control" value={year} onChange={(event) => yearChangeHandler(event)} />
                </div>
                <input type={"submit"} value="Add Book" className="btn btn-warning btn-block add-btn" />
            </form>
            <table className="table table-striped mt-5 text-center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody id="book-list">
                    <>
                        {books.length > 0 && books.map(book => (
                            <Book key={book.id} {...book}></Book>
                        ))}
                        {/* {!this.state.books.length && null} */}
                    </>
                </tbody>
            </table>
        </>
    )
}
