import React from 'react'
import './../CSS/Signup.css'

const Signup = () => {
  return (
    <div className='signup'>
      <form>
        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
        <h1 className="h3 mb-3 fw-normal">Sign up</h1>

        <div className="form-floating">
          <input type="fname" className="form-control" id="floatingInput" placeholder="first name" />
          <label htmlFor="floatingInput">First name</label>
        </div>
        <div className="form-floating">
          <input type="lname" className="form-control" id="floatingInput" placeholder="last name" />
          <label htmlFor="floatingInput">Lastname</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
          <label htmlFor="floatingPassword"> Confirm Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Signup
