export let users = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'}
];

export const removeUser = (id: string): void => {
  users = users.filter(el => el.id.toString() !== id)
}

export async function GET () {
  return Response.json({ users });
}

export async function POST (request: Request) {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-type": "application/json"
    },
    status: 201
  });
}