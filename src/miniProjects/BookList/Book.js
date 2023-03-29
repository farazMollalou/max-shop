import React from 'react'

export default function Book(props) {
    return (
        <tr>
            <td>{props.bookName}</td>
            <td>{props.bookAuthor}</td>
            <td>{props.publishYear}</td>
        </tr >
    )
}
