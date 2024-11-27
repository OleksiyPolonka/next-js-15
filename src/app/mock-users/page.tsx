import { revalidatePath } from "next/cache";

interface MockUserProps {
  id: number,
  name: string,
  email: string
}

export default async function UsersServer () {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch('https://674780fe38c8741641d6eba8.mockapi.io/users');
  const users = await response.json() as MockUserProps[];

  async function addUser(formData: FormData) {
    "use server"

    const name = formData.get('name')
    const res = await fetch('https://674780fe38c8741641d6eba8.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify({name})
    });

    const newUser = await res.json();
    revalidatePath('mock-users')
    console.log('%csrc/app/mock-users/page.tsx:25 newUser', 'color: #007acc;', newUser);
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input type="text" name='name' required className="border p-2 mr-2 text-black" />
        <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">
          Add user
        </button>
      </form>

      <ul className="grid grid-cols-4 gap-4 py-10">
        {
          users.map((user) => (
            <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
              {user.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
