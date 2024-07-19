import React from 'react'

const LoginModal = () => {
  return (
    <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
            <div className="modal-header">
                <h4 className="modal-title fs-6">Login / Register</h4>
                <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
            </div>
            <div className="modal-body">
                <div className="modal-login-form py-4 px-md-3 px-0">
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
                    <div className="modal-flex-last">
                        <a href="#" className="text-primary fw-medium">Forget Password?</a>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="modal-footer align-items-center justify-content-center">
                <p>Don't have an account yet?<a href="signup.html" className="text-primary fw-medium ms-1">Sign Up</a></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModal