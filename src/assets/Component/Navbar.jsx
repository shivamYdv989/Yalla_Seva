import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const urlCheck=window.location.pathname
  return (
    <>
      <div className='row nav2'>
        <div className='col-md-4'><img src="https://img1.wsimg.com/isteam/ip/ddfa881c-381d-4902-9c2d-7a8358893eba/blob-eefb208.png/:/rs=w:95,h:95,cg:true,m/cr=w:95,h:95/qt=q:95" /></div>
        <div className='col-md-4'>
          <div style={{ display: 'flex' }}>
            <p><Link to='/home' style={{ color:urlCheck==='/home' ||urlCheck===''? 'rgb(44, 110, 245)':'' }}>Home</Link></p>
            <p style={{ paddingLeft: '32px' }}><a href='#'>REFUND & CANCELLATION</a></p>
            <p style={{ paddingLeft: '32px' }}><Link to='/services' style={{ color:urlCheck==='/services' ? 'rgb(44, 110, 245)':'' }}>Service</Link></p>
          </div>
        </div>
        <div className='col-md-4'><a rel="" role="link" aria-haspopup="false" data-ux="Link" href="tel:+918904020060" data-typography="LinkAlpha">+918904020060</a>
          <span style={{ marginRight: '24px', marginLeft: '24px' }}>|</span>
          <svg viewBox="0 0 24 24" fill="currentColor" width="40px" height="40px" class=""><path fill-rule="evenodd" d="M5.643 19.241a.782.782 0 0 1-.634-.889c.317-2.142 1.62-4.188 3.525-5.244l.459-.254-.39-.352a4.89 4.89 0 0 1-.797-6.327 4.747 4.747 0 0 1 2.752-2.003 4.894 4.894 0 0 1 6.092 5.72c-.211 1.042-.802 1.97-1.59 2.683l-.308.28.459.253c1.876 1.04 3.185 3.131 3.53 5.26a.765.765 0 0 1-.742.883c-.367.005-.697-.25-.753-.613-.52-3.384-4.067-6.087-7.702-4.324-1.628.79-2.714 2.511-3.014 4.313a.76.76 0 0 1-.887.614zm2.873-10.36a3.36 3.36 0 0 0 3.356 3.355A3.36 3.36 0 0 0 15.23 8.88a3.361 3.361 0 0 0-3.358-3.357A3.36 3.36 0 0 0 8.516 8.88z"></path></svg></div>
      </div>
    </>
  )
}

export default Navbar