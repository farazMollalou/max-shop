import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Pagination.scss';

function Pagination() {
    const postsPerPage = 15

    const [comments, setComments] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageComments, setCurrentPageComments] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then((res) => {
            console.log(res.data)
            setComments(res.data)
        })
    }, [])
    useEffect(() => {
        setCurrentPageComments(comments.slice(0, postsPerPage))
    }, [comments])

    let number_of_pages = Math.ceil(comments.length / postsPerPage)
    let pagesArray = Array.from(Array(number_of_pages).keys())

    const clkHandler = (num) => {
        setCurrentPage(num + 1)
        setCurrentPageComments(comments.slice(postsPerPage * (num), postsPerPage * (num + 1)))
    }

    return (
        <section className='comments-page'>
            <h2 className='title'>Store Products</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post ID</th>
                        <th>Email</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {!currentPageComments ? "loading..." : currentPageComments.map(item => <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.postId}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                        </tr>
                    </>)}
                </tbody>
            </table>
            <div className="pages-number">
                {pagesArray.map(p => (
                    <button key={p} onClick={() => clkHandler(p)} className={p + 1 === currentPage ? 'btn active-btn' : 'btn'}>{p + 1}</button>
                ))}
            </div>
        </section>
    )
}

export default Pagination