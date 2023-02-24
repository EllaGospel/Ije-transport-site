import React from 'react'

function Footer() {
    const ayear = new Date().getFullYear()

  return (
    <>
    <footer className='footer p-10 bg-gray-700 text-white footer-setting'>
        <p className='m-auto '> &copy;{ayear}Ije</p>
    </footer>
    </>
  )
}

export default Footer
