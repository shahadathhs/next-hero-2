'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const pathName = usePathname();
  
  const navLinks = [
    { title: 'Gallery', path: '/gallery' },
    { title: 'Meals', path: '/meals' },
    { title: 'Posts', path: '/posts' },
    { title: 'About', path: '/about' },
    { title: 'Home', path: '/' },
  ];
  
  return (
    <nav className="flex justify-between px-4 py-3 m-2"> 
      <h6 className='text-4xl'>Next <span className='text-blue-600'>Hero</span></h6>
      <ul className="flex gap-4 text-xl">
        {
          navLinks.map(link =>
            <li key={link.path}> 
              <Link className={`${pathName === link.path && 'text-blue-600'}`}
                    href={link.path}> {link.title} </Link> 
            </li>
          )
        }
      </ul>
    </nav>
  );
}
