'use client'

import { useEffect, useState } from "react"

interface UsersProps {
  id: number,
  name: string,
  email: string
}

export default function UsersClient () {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [error, setErrors] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        // clarify why we need await json
        const data = await response.json()
        setUsers(data)
      } catch (e) {
        setErrors(e as string)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
console.log('%csrc/app/users-client/page.tsx:39 users', 'color: #007acc;', users);
  return (
    <ul className="space-y-4 p-4">
      {
        users.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
            {user.name} ({user.email})
          </li>
        ))
      }
    </ul>
  )
}
