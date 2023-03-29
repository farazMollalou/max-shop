import React, { useLayoutEffect, useEffect, useState, Profiler } from 'react'
import './style.css';

function LayoutExer() {

  const [num, setNum] = useState(0)
  const [divStyle, setDivStyle] = useState({})

  useLayoutEffect(() => {
    const random_value = Math.ceil(Math.random() * 100) * 5
    for (let i = 0; i <= 100_000_000; i++) {
      if (i === 100_000_000) {
        setDivStyle({ left: `${random_value}px` })
      }
    }
  }, [num])

  const spanTag = (actualDuration, id, j, u, d, inter) => {
    console.log('number updated!', '\t phase : ' , id)
  }

  return (
    <>
      <div>LayoutExer</div>
      <br />
      <Profiler id='span' onRender={spanTag}>
        <span>{num}</span>
      </Profiler>
      <br /><br /><span className='box' style={divStyle}>Test Box : {num}</span><br /><br />
      <button onClick={() => setNum(pre => pre + 1)} style={{ padding: 10, borderRadius: 10 }}> add number </button> <button onClick={() => setNum(pre => pre - 1)} style={{ padding: 10, borderRadius: 10 }}> minus Number</button>
    </>
  )
}

export default LayoutExer