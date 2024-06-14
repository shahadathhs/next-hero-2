import React from 'react'

const getTime = async() => {
  // const res = await fetch('http://localhost:3000/time', {cache: 'no-store'})
  const res = await fetch('http://localhost:3000/time', {next: {revalidate: 5}})
  const data = await res.json()
  return data.currentTime
}

export default async function AboutPage() {
  const currentTime = await getTime()

  return (
    <div className='p-10'>
      <p>Time: {currentTime} </p>
    </div>
  )
}
