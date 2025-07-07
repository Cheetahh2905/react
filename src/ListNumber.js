import {useState} from "react"
export default function ListNumber() {
    let [x, setX] = useState('');
    let [arr, setArr] = useState([]);
    let [sum, setSum] = useState(0);
    let [tbc, setTbc] = useState(0);
    let handleAdd  = () =>{
        let num = parseInt(x);
        if(!isNaN(num)){
            setArr([...arr, num])
            setX('')
        }
    }
    let handleSum = () =>{
        let sum = arr.reduce((a, b) => a + b, 0);
        setSum(sum)
    }
    let handleTBC = () => {
        const divisibleBy3 = arr.filter(n => n % 3 === 0);
        if (divisibleBy3.length > 0) {
            const total = divisibleBy3.reduce((a, b) => a + b, 0);
            setTbc(total / divisibleBy3.length);
        } else {
            setTbc(0);
        }
    }

    return(
        <>
            <h2>ListNumber</h2>
            <input type='number' value={x} onChange={e=>setX(e.target.value)}></input>
            <button onClick={handleAdd}>Thêm</button>
            <p>Mảng: {arr.join(' , ')}</p>
            <button onClick={handleSum}>Tính Tổng</button>
            <p>Tổng: {sum}</p>
            <button onClick={handleTBC}>Tính TBC</button>
            <p>TBC: {tbc}</p>
        </>
    )
}

// 1. Tạo component ListNumber
// 2. Input, nút thêm 1 phần tử vào mảng
// 3. Nút Tính tổng các phần tử trong mảng
// 4. Tính TBC các phần tử chia hết cho 3 trong mảng
// git