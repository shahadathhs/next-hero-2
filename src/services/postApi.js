export default async function getAllPosts() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=10`);
  const data = await result.json()
  return data
}