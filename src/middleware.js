import { NextResponse } from 'next/server'
// import { redirect } from 'next/dist/server/api-utils';

const coo = 'next-ph-hero'

export function middleware(request) {
  console.log(request.cookies.get('token'))
  // return NextResponse.redirect(new URL('/dashboard', request.url))
  // return NextResponse.next()
  // return NextResponse.rewrite(new URL('/about/history', request.url))
  let cookie = request.cookies.get('token')
  if (!cookie || cookie.value !== coo) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about',
  matcher: [ "/contact"]
}