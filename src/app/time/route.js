// export const dynamic = "force-dynamic";

export async function GET() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  return Response.json({
    currentTime: now.toLocaleString(undefined, options)
  });
}
