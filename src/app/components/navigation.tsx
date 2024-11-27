'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
  const pathName = usePathname()

  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href="/"
        className={pathName === '/' ? 'mr-4 text-white-500' : 'mr-4 text-blue-400'}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathName === '/about' ? 'mr-4 text-white-500' : 'mr-4 text-blue-400'}
      >
        About
      </Link>
      <Link
        href="/product/1"
        className={pathName === '/product/1' ? 'mr-4 text-white-500' : 'mr-4 text-blue-400'}
      >
        Product 1
      </Link>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}
