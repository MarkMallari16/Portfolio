import React, { useState } from 'react'

function NavBar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollIntoSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav className=' mx-6 lg:mx-36'>
      <div className='navbar flex justify-between items-center mt-5 bg-base-100'>
        <a className='text-2xl font-medium '>
          Mark.Dev
        </a>
        <div className='lg:hidden'>
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className={`lg:flex items-center gap-8`} >
          <a href='#home' onClick={() => scrollIntoSection(homeRef)}>Home</a>
          <a href='#about' onClick={() => scrollIntoSection(aboutRef)}>About</a>
          <a href='#skills' onClick={() => scrollIntoSection(skillsRef)}>Skills</a>
          <a href='#projects' onClick={() => scrollIntoSection(projectsRef)}>Projects</a>
          <a href='#contacts' onClick={() => scrollIntoSection(contactRef)}>Contact</a>
        </div>


      </div>
    </nav>

  )
}

export default NavBar