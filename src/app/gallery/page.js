import Image from 'next/image'
import React from 'react'

export default function GalleryPage() {
  return (
    <div className='min-h-screen px-12 py-16'>
      <h6>This is gallery page</h6>
      <div className='grid grid-cols-3 gap-3'>
      {
        [1,2,3].map(img => (
          <Image key={img} src={`/images/slide${img}.png`} alt={`slide${img}`} height="130" width="240" />
        ))
      }
      {
        [4,5,6,7].map(img => (
          <Image key={img} src={`/images/slide${img}.jpeg`} alt={`slide${img}`} height="130" width="240" />
        ))
      }
      </div>
      
      
    </div>
  )
}
