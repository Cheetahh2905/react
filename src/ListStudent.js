import {useState} from 'react'
export default function ListStudent() {
    let[Student, setStudent] = useState([
        {name:'Trần Văn A', age: 22, class: '10a1', mark: 9},
        {name:'Nguyễn Thị B', age: 20, class: '12a2', mark: 10},
        {name:'Đoàn Văn C', age: 18, class: '10a3', mark: 7},
        {name:'Trần Công D', age: 20, class: '12a1', mark: 5},
        {name:'Nguyễn Văn E', age: 19, class: '11a1', mark: 6},
    ])
    let [addStudent, setAddStudent] = useState({name:'', age: 0, class: '', mark: 0})
    let [deleteStudent, setDeleteStudent] = useState('')
    let [searchName, setSearchName] = useState('')
    let [searchClass, setSearchClass] = useState('')
    function dispayStudent(item, index){
        return(
            <li key={index}>
                <p>Họ tên: {item.name}</p>
                <p>Tuổi: {item.age}</p>
                <p>Lớp: {item.class}</p>
                <p>Điểm: {item.mark}</p>
            </li>
        )
    }
    function handleChange(e){
        let {name, value} = e.target
        setAddStudent(prev =>({
            ...prev,
            [name]: value
        }))
    }
    function addStudents(){
        let newStudent = {
            ...addStudent,
            age: parseInt(addStudent.age),
            mark: parseFloat(addStudent.mark)
        };
        setStudent([...Student, newStudent])
        setAddStudent({name:'', age: 0, class: '', mark: 0})
    }
    function deleteStudents(){
        setStudent(Student.filter(item => item.name !== deleteStudent))
        setDeleteStudent('')
    }
    function showTop3(){
        let top3 = [...Student].sort((a,b) => b.mark - a.mark).slice(0,3)
        setStudent(top3)
    }
    function sortMarkASC(){
        let sorted = [...Student].sort((a,b) => a.mark - b.mark)
        setStudent(sorted)
    }
    function sortMarkDESC(){
        let sorted = [...Student].sort((a,b) => b.mark - a.mark)
        setStudent(sorted)
    }
    function searchByName(){
        let reseult = Student.filter(s => s.name.toLowerCase().includes(searchName.toLowerCase()))
        setStudent(reseult)
    }
    function searchByClass(){
        let reseult = Student.filter(s => s.class.toLowerCase().includes(searchClass.toLowerCase()))
        setStudent(reseult)
    }
    return(
        <>
            <h3>Danh Sách Học Sinh</h3>
            <ul>
                {Student.map(dispayStudent)}
            </ul>
            <h3>Thêm học sinh</h3>
            <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                value={addStudent.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Tuổi"
                value={addStudent.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="class"
                placeholder="Lớp"
                value={addStudent.class}
                onChange={handleChange}
            />
            <input
                type="number"
                name="mark"
                placeholder="Điểm"
                value={addStudent.mark}
                onChange={handleChange}
            />
            <button onClick={addStudents}>Thêm học sinh</button>
            <h3>Xóa Học Sinh</h3>
            <input
                type="text"
                placeholder ="Nhập tên học sinh muốn xóa"
                value={deleteStudent}
                onChange={e => setDeleteStudent(e.target.value)}
            />
            <button onClick={deleteStudents}>Xóa học sinh</button>
            <h3>Chức Năng</h3>
            <button onClick={showTop3}>Top 3 điểm cao nhất</button>
            <button onClick={sortMarkASC}>Sắp xếp điểm tăng dần</button>
            <button onClick={sortMarkDESC}>Sắp xếp điểm giảm dần</button>
            <h3>Tìm Kiếm Theo Tên Học Sinh</h3>
            <input
                type="text"
                placeholder='Tìm theo tên'
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
            />
            <button onClick={searchByName}>Tìm</button>
            <h3>Tìm kiếm theo lớp</h3>
            <input
                type="text"
                placeholder='Tìm theo lớp'
                value={searchClass}
                onChange={e => setSearchClass(e.target.value)}
            />
            <button onClick={searchByClass}>Tìm</button>
        </>
    )
}