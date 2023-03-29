import { useState, useEffect } from 'react'
import './UseRefExer.css';

function UseRefExer() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        setNum(pre  => pre+1)
    }, [])
    return (
        <div className='btn-container'>
            <h4>{num}</h4>
        </div>
    )
}

export default UseRefExer