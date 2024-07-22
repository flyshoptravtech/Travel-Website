import React from 'react'
import { Link } from 'react-router-dom'

const LoginModal = () => {
  return (
    <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
            <div className="modal-header">
                <h4 className="modal-title fs-6">Login / Register</h4>
                <div className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></div>
            </div>
            <div className="modal-body">
                <div className="modal-login-form p-md-3 p-0">
                <form>
                    <div className="form-floating mb-4">
                    <input type="email" className="form-control" placeholder="name@example.com" autoComplete='off' />
                    <label>User Name</label>
                    </div>
                    <div className="form-floating mb-4">
                    <input type="password" className="form-control" placeholder="Password" autoComplete='off' />
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