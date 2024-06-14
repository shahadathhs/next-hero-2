import React from 'react'
// import getAllPosts from './../../services/postApi';
import Link from 'next/link';
// import { redirect } from 'next/navigation';
import getAllPosts from '@/services/postApi';
// import getAllPosts from '@/services/postApi';

export const metadata = {
  title: {
    absolute: "Posts",
  },
  description: 'This is our posts',
  keywords: ['posts', 'next.js posts']
}

// const getAllPost = async() => {
//   const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const data = await result.json()
//   if (data) {
//     redirect(`/posts/${data[0].id}`)
//   }
//   return data
// }

export default async function  PostPage() {
  const postData = await getAllPosts()
  // console.log(postData)

  return (
    <div className='mt-10 space-y-4'>
      <h2>This is posts.</h2>
      <button className='btn btn-outline'>Button</button>
      <div className='space-y-3 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3'>
        {
          postData?.map(post =>
            <div key={post.id} className='border-2 rounded-md p-5'>
              <p>Title: {post.title}</p>
              <p>Description: {post.body} </p>
              <Link href={`/posts/${post.id}`}> 
              <button className="bg-green-500 rounded-md px-4 py-2"> View Details </button> 
              </Link> 
            </div>
          )
        }
      </div>

    </div>
  )
}
