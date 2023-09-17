import React, { useEffect, useState } from 'react'
import Header from '../../../componets/user/header/Header'
import axios from 'axios'
import { Button } from 'antd'
import ListProduct from './ListProduct';

export default function ListProduct() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [categoryId, setCategoryId] = useState(1)


    // lay ra tat ca danh sach category
    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then((response) => { setCategories(response.data) })
            .catch((error) => console.log(error))
    }, [])


    // lay ra id cua category
    const getCategoryId = (id) => {
        setCategoryId(id)
    }

    // goi api lay ra thong tin tat ca sp
    const loadDataProduct = () => {
        axios
            .get("http://localhost:3000/products")
            .then((response) => {
                if (categoryId === 0) {
                    setProducts(response.data);
                } else {
                    // neu nhu co categoryid tien hanh loc
                    const listProduct = response.data.filter((product) => product)
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        loadDataProduct()
    }, [])


    return (
        <div>
            <Header />
            <div className='p-4 flex gap-8'>
                <div className='w-1/5 border rounded shadow-md  h-screen'>
                    <ul>
                        {
                            categories.map((cat) => (
                                <li
                                    style=
                                    {
                                        categoryId === cat.category_id
                                            ?
                                            {
                                                backgroundColor: "red",
                                                color: '#fff',
                                            }
                                            :
                                            {}
                                    }
                                    onClick={() => getCategoryId(cat.category_id)}
                                    className='p-3 hover:bg-slate-100 cursor-pointer'
                                    key={cat.category_id}
                                >
                                    {cat.category_name}
                                </li>
                            ))
                        }

                    </ul>
                </div>


                <div className="bg-red-400 w-4/5 p-3 grid grid-cols-4">
                    <div className="bg-white p-6 h-80 w-60 rounded-md flex flex-col justify-between align-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfSgUcMJKtXUKf0ih8rTLkiEbdPnTb4-wNg&usqp=CAU"
                            alt=""
                        />
                        <h2 className="text-center text-xl">Đồng hồ sang trọng</h2>
                        <div className="flex justify-between flex-col">
                            <span>1999999</span>
                            <Button>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                    <div className="bg-white p-6 h-80 w-60 rounded-md flex flex-col justify-between align-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfSgUcMJKtXUKf0ih8rTLkiEbdPnTb4-wNg&usqp=CAU"
                            alt=""
                        />
                        <h2 className="text-center text-xl">Đồng hồ sang trọng</h2>
                        <div className="flex justify-between flex-col">
                            <span>1999999</span>
                            <Button>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                    <div className="bg-white p-6 h-80 w-60 rounded-md flex flex-col justify-between align-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfSgUcMJKtXUKf0ih8rTLkiEbdPnTb4-wNg&usqp=CAU"
                            alt=""
                        />
                        <h2 className="text-center text-xl">Đồng hồ sang trọng</h2>
                        <div className="flex justify-between flex-col">
                            <span>1999999</span>
                            <Button>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                    <div className="bg-white p-6 h-80 w-60 rounded-md flex flex-col justify-between align-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfSgUcMJKtXUKf0ih8rTLkiEbdPnTb4-wNg&usqp=CAU"
                            alt=""
                        />
                        <h2 className="text-center text-xl">Đồng hồ sang trọng</h2>
                        <div className="flex justify-between flex-col">
                            <span>1999999</span>
                            <Button>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
