import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <form>
            <h2>Welcome to the Gallery</h2>
            <div className='link-btns'>
                <a href='/Sign-in'>Sign in</a>
                <a href='/protected'>Gallery</a>
            </div>
        </form>
    </div>
  )
}

export default Login