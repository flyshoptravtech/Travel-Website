import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CryptoJS from "crypto-js"
import AxiosHeader from '../helpers/AxiosHeader'

const LoginModal = () => {
    
    const apiUrl = process.env.REACT_APP_API_URL
    const secret = process.env.REACT_APP_SECRET_KEY
    const axiosHeaders = AxiosHeader()
    const navigate = useNavigate()
    const myModalRef = useRef(null)
    const myInputRef = useRef(null)
    const closeBtn = useRef(null)

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}login`,data,axiosHeaders)
        .then(res=>{
            const mess = res.data.message
            if(mess.username){
                toast.error(mess.username[0])
                return;
            }else if(mess.password){
                toast.error(mess.password[0])
            }else if(mess.error){
                toast.error(mess.error)
            }else{
                toast.success(mess)
                closeBtn.current.click()
                localStorage.setItem("authToken",res.data.token)
                const userinfo = CryptoJS.AES.encrypt(JSON.stringify(res.data.data), secret).toString();
                localStorage.setItem("userInfo",userinfo)
                navigate("/")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        })
        .catch(res=>{console.log(res);})
    }


    useEffect(() => {
        const myInput = myInputRef.current            
        const myModal = myModalRef.current        
        const handleShown = () => {
            myInput.focus();
        };
        myModal.addEventListener('shown.bs.modal', handleShown);
        return () => {
            myModal.removeEventListener('shown.bs.modal', handleShown);
        };
    }, []);
    


  return (
    <div className="modal fade" id="login" ref={myModalRef} tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
            <div className="modal-header">
                <h4 className="modal-title fs-6">Login / Register</h4>
                <div className="text-muted fs-4" ref={closeBtn} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></div>
            </div>
            <div className="modal-body">
                <div className="modal-login-form p-md-3 p-0">
                <form onSubmit={handleLogin}>
                    <div className="form-floating mb-4">
                    <input type="text" className="form-control" name='username' placeholder="name@example.com" autoComplete='off' id='loginEmail' ref={myInputRef} />
                    <label>Email / Phone Number</label>
                    </div>
                    <div className="form-floating mb-4">
                    <input type="password" className="form-control" name='password' placeholder="Password" autoComplete='off' />
                    <label>Password</label>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                    </div>
                    <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                    <div className="modal-flex-last" data-bs-dismiss="modal" aria-label="Close">
                        <Link to="/forgot-password" className="text-primary fw-medium" >Forget Password?</Link>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="modal-footer align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
                <p>Don't have an account yet?<Link to="/sign-up" className="text-primary fw-medium ms-1">Sign Up</Link></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModal