import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter flex-col bg-gray-100 padding-container'>
      <div className='header flexBetween flex-col sm:flex-row max-container 
         py-5 w-full center gap-5 sm:gap-10 lg:gap-15' style={{borderTop: '0.5px solid #c7c8c7'}}>
        <p className='bold-20 text-black'>Car Care</p>
        <p className='regular-16 text-black'>Copy right by <strong>“Rubick AI”</strong> LLC</p>
        <div>
          <ul className="hidden h-full gap-12 xl:flex flex-row items-center">
              {[NAV_LINKS.map((link) => (
                  <Link href={link.href} key = {link.key}
                      className='text-black regular-16 flexCenter cursor-pointer transition-all hover:font-bold'
                  >
                      {link.label}
                  </Link>
              ))]}
          </ul>
        </div>
        <div className='center flex-row gap-3' style={{}}>
          <p className='regular-16 text-black'> Social:</p>
          <div className='center flex-row'>
            <Link href="https://www.facebook.com/profile.php?id=61555200031184" target="_blank">
              <Image src="/facebook logo.svg" alt="" width={27} height={27}/>
            </Link>
            <Link href='https://www.instagram.com/_u/carcare.mongolia?fbclid=IwAR0eQ8jX4hBS3vz_HsrO7MjDfMNnTmAmZr4UB8lVgrC-mzJ-Mky5T0uNX4g' target="_blank">
              <Image src="/instagram logo.svg" alt="" width={60} height={60}/>
            </Link>
            <Link href='https://www.linkedin.com/company/car-care-application/about/' target="_blank">
              <Image src="/linkedIn logo.png" alt="" width={28} height={28}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer