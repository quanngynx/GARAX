export async function POST(request: Request) {
    const body = await request.json()
  if (!body) {
    console.log("Not found")
    return Response.json(
      { message: 'Không nhận được session token' },
      {
        status: 400
      }
    )
  }

  return Response.json(body, {
    status: 200,
  })
}