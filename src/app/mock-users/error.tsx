'use client'

import { useEffect } from "react"

export default function Error({ error }: {error: Error}) {
  useEffect(() => {
    console.log('%csrc/app/users-server/error.tsx:7 error', 'color: #007acc;', error);
  }, [error])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching users data</div>
    </div>
  )
}
