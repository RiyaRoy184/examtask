import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ marginTop: '100px' }} className=' bg-amber-600 mt-45 p-5 text-white font-bold' >
      <div className='flex justify-around '>
        <div>
          <Link className='text-2xl ' to={'/'} ><i className="fa-solid fa-utensils me-1"></i>FOOD ZONE</Link>
          <p className='mt-3'>For the love of delicious food <br /> We are always here to serve you.</p>
          <p>One cannot think well, love well, sleep well, if one has not dined well.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl mb-3' >Links</h1>
          <Link to={'/'} >FOOD MENU </Link>
          <Link to={'/id/view'} >ABOUT</Link>
        </div>

        <div className="flex flex-col">
          <h5 className='text-2xl mb-3'>Contact</h5>
          <div className="flex">
            <input placeholder='Enter Your E-mail Here!!' type="text" className='rounded p-1 w-auto form-control me-4 ' />
            <button ><i className="fa-solid fa-arrow-right"></i></button>

          </div>
          <div className="flex justify-between mt-3">
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-brands fa-github"></i></a>
            <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
              <i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer 