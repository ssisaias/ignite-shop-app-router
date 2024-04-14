export async function GET(request: Request) {
  const sampleJsonData = {
    message: 'Hello world!'
  };
  return new Response(JSON.stringify(sampleJsonData), {
    headers: {
      'content-type': 'application/json'
    }
  });
}