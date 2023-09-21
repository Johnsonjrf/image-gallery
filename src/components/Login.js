import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <form>
            <input type='text'/>
            <input type='password'/>
            <button>Login</button>
            <a href='/sign-in'>Sign In</a>
        </form>
    </div>
  )
}

export default Login