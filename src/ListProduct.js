import {useState} from "react";

export default function ListProduct() {
    let [products, setProducts] = useState([
            {name: 'iphone 1', price: 100, quantity: 10, category: 'phone'},
            {name: 'iphone 2', price: 200, quantity: 15, category: 'phone'},
            {name: 'iphone 3', price: 205, quantity: 16, category: 'phone'},
            {name: 'mac pro', price: 2050, quantity: 11, category: 'laptop'},
            {name: 'mac mini', price: 2005, quantity: 12, category: 'laptop'},
            {name: 'mac air', price: 2055, quantity: 13, category: 'laptop'},
        ]
    );
    let [categoryList, setCategoryList] = useState(['phone', 'laptop']);
    let [newCate, setNewCate] = useState('');
    let [product, setProduct] = useState({name: '', price: 0, quantity: 0, category: ''});
    let [nameSearch, setNameSearch] = useState('');
    let [categorySearch, setCategorySearch] = useState(null);
    let [sortType, setSortType] = useState(null);

    function addProduct() {
        setProducts([...products, product])
    }

    function addCategory() {
        setCategoryList([...categoryList, newCate])
    }

    function displayList(products) {
        let list = products
            .filter(x => x.name.includes(nameSearch) || (x.price + '').includes(nameSearch))
        if (categorySearch !== null) {
            list = list.filter(x => x.category.includes(categorySearch));
        }
        if (sortType === null) {
            return list
        }
        if (sortType === 'ASC') {
            return list
                .sort((a, b) => a.price - b.price)
        }
        if (sortType === 'DESC') {
            return list
                .sort((a, b) => b.price - a.price)
        }
    }

    return (
        <>
            {/*Hien danh sach category va tim kiem theo category*/}
            <h2  onClick={()=> {setCategorySearch(null)}}>All</h2>
            {
                categoryList.map((y, index) => (
                    <h2 onClick={()=> {setCategorySearch(y)}}>
                        {index + 1}. {y}
                    </h2>
                ))
            }
            {/*Them categiry*/}
            <input type="text" value={newCate} onChange={(e) => setNewCate(e.target.value)}/>
            <button onClick={addCategory}>Thêm category</button>
            <hr/>
            {/*Tim kiem theo ten*/}
            <input type="text" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}/>
            {/*Sap xep tang dan, giam dan*/}
            <button onClick={() => {
                setSortType('ASC')
            }}>
                Tang
            </button>
            <button onClick={() => {
                setSortType('DESC')
            }}>
                Giam
            </button>
            <button onClick={() => {
                setSortType(null)
            }}>
                Reset
            </button>
            <hr/>
            {/*Hien danh sach san pham*/}
            {
                displayList(products).map((product, index) => (
                    <h3>
                        {index + 1}. {product.name}: {product.price}, {product.quantity}, {product.category}
                    </h3>
                ))
            }
            {/*Them moi san pham*/}
            <input type="text"
                   value={product.name}
                   onChange={(e) =>
                       setProduct({...product, name: e.target.value})}/>
            <input type="text"
                   value={product.price}
                   onChange={(e) =>
                       setProduct({...product, price: +e.target.value})}/>
            <input type="text"
                   value={product.quantity}
                   onChange={(e) =>
                       setProduct({...product, quantity: +e.target.value})}/>
            <select
                value={product.category}
                onChange={(e) => {
                    setProduct({...product, category: e.target.value})
                }}
            >
                {
                    categoryList.map((y, index) => (
                        <option value={y} key={index}>
                            {y}
                        </option>
                    ))
                }
            </select>
            <button onClick={addProduct}>Thêm</button>
        </>
    )
}

// thêm sản phẩm vào danh sách.