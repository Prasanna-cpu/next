import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h2>Logo</h2>
        </div>
      </ul>

      <div className="links-container">
        <Link className='link' href="/">Home</Link>
        <Link className='link' href="/about">About</Link>
        <Link className='link' href="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
}

export default Navbar