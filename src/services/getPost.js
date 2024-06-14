export default async function getPost({id}) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  
  return result.json()
}