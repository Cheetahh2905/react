import { useState } from 'react';

export default function ListClass() {
    const [classes, setClass] = useState([
        { nameClass: '10a1' },
        { nameClass: '10a2' },
        { nameClass: '10a3' },
        { nameClass: '10a5' },
        { nameClass: '12a2' },
        { nameClass: '11a1' },
        { nameClass: '10a6' },
    ]);

    const [searchClass, setSearchClass] = useState('');
    const [newClass, setNewClass] = useState({ nameClass: '' });
    const [deleteClass, setDeleteClass] = useState('');

    // ✅ Lọc danh sách theo từ khóa tìm kiếm
    function getFilteredClasses() {
        return classes.filter(item =>
            item.nameClass.toLowerCase().includes(searchClass.toLowerCase())
        );
    }

    // ✅ Hiển thị từng item
    function displayClass(item, index) {
        return (
            <li key={index}>
                <h3>{item.nameClass}</h3>
            </li>
        );
    }

    // ✅ Thêm lớp mới
    function addClass() {
        if (newClass.nameClass.trim() === '') return;
        setClass([...classes, newClass]);
        setNewClass({ nameClass: '' }); // reset input
    }

    // ✅ Xoá lớp
    function deleteClasses() {
        setClass(classes.filter(item => item.nameClass !== deleteClass));
        setDeleteClass(''); // reset input
    }

    return (
        <>
            <h2>List Class</h2>

            {/* Input tìm kiếm */}
            <input
                type="text"
                placeholder="Tìm lớp..."
                value={searchClass}
                onChange={(e) => setSearchClass(e.target.value)}
            />

            {/* Danh sách hiển thị */}
            <ul>
                {getFilteredClasses().map(displayClass)}
            </ul>

            {/* Thêm lớp mới */}
            <input
                type="text"
                placeholder="Tên lớp mới"
                value={newClass.nameClass}
                onChange={(e) => setNewClass({ nameClass: e.target.value })}
            />
            <button onClick={addClass}>Thêm lớp</button>
            <br/>
            {/* Xoá lớp */}
            <input
                type="text"
                placeholder="Nhập tên lớp muốn xoá"
                value={deleteClass}
                onChange={(e) => setDeleteClass(e.target.value)}
            />
            <button onClick={deleteClasses}>Xoá lớp</button>
        </>
    );
}
