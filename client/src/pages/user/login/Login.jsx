import React from 'react'
import { Button, Input } from "antd"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../../firebase/firebaseConfig'

export default function Login() {
    // chuyen huong ve trang home
    const navigate = useNavigate()

    // dang nhap vs google
    const handleLogin = () => {

    }

    // dang nhap vs api co san
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
                const userLocal = {
                    email: response.user.email,
                    userName: response.user.displayName,
                    image: response.user.photoURL,
                    userId: response.user.uid,
                }
                // luu thong tin tren local
                localStorage.setItem('userLocal', JSON.stringify(userLocal))
                // chuyen huong ve trang home
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <form className="p-6 border rounded w-1/4">
                    <h3 className='text-center text-2xl'>LOGIN</h3>
                    <div className='mb-4'>
                        <label htmlFor="">Email</label>
                        <Input
                            status="error"
                            id='email'
                            className='mt-2'
                            placeholder='nhập email'
                        />
                        <div className='mt-1 text-red-400'>Email không được để trống!</div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Mật khẩu</label>
                        <Input
                            status="error"
                            id='password'
                            className='mt-2'
                            placeholder='nhập mật khẩu'
                        />
                        <div className='mt-1 text-red-400'>Mật khẩu không được để trống!</div>
                    </div>
                    <div>
                        <Button type='primary' className='w-full q-btn-primary'>Đăng nhập</Button>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <Link to={"/"}>Quay lại</Link>
                        <Link to={"/forget-password"}>Quên mật khẩu</Link>
                    </div>
                    <div className='text-center my-3'>
                        <span>Hoặc</span>
                    </div>
                    <div>
                        <Button
                            onClick={signInWithGoogle}
                            type='primary'
                            className='w-full flex items-center justify-center gap-2 q-btn-primary'>
                            <img
                                height={20}
                                width={20}
                                src="https://cdn.tgdd.vn/2020/03/GameApp/lologoogle-180x180.png" alt="" />
                            Đăng nhập với google
                        </Button>
                    </div>
                    <div className='text-center mt-3'>
                        Bạn đã có tài khoản ?  <Link to={"/register"}>Đăng kí</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
