import React from 'react'

const Register = () => {
  return (
    <div className='register'>
        <form>
            <input type='email' placeholder='Enter your email'/>
            <input type='password' placeholder='Enter your password'/>
            <input type='password' placeholder='Confirm password'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register