import { useState } from 'react'
export default function DisplayArr() {
    let  [x, setX] = useState(10)
    return(
        <>
            <h1>{x}</h1>
            <button onClick={() =>{
                x++
                setX(x)
            }}>Tăng A</button>
        </>
    )
}

// 2 input nhap a và b
// 1 nút ấn để tính tổng a,b