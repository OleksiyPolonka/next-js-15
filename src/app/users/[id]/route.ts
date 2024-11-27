import { removeUser, users } from "../route";

export async function GET(request: Request, { params }: { params: {id: string} }) {
  const { id } = params;

  return Response.json({ user: users.find(el => el.id.toString() === id) ?? null })
}

export async function DELETE(request: Request, { params }: { params: {id: string} }) {
  const { id } = await params;

  try {
    removeUser(id)
    return Response.json('Success')

  } catch {
    return new Response('Something went wrong', {
      status: 500
    })
  }
}
