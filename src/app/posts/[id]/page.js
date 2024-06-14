/* eslint-disable react/prop-types */

import getPost from '@/services/getPost';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function PostPage({ params }) {
  const { id } = params;
  // console.log(params)

  if (parseInt(id) >= 10) {
    notFound();
  }

  const post = await getPost({ id });
  // console.log(post)
  return (
    <div className='space-y-3 p-7'>
      <p>The post id is: {id}</p>
      <p className='text-blue-600'>Title: {post.title} </p>
      <p className='text-orange-500'> Description: {post.body} </p>
    
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost({ id });

  return {
    title: post.title.slice(0,10),
    description: post.body,
  };
}
