'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
  const pathName = usePathname()
console.log('%csrc/app/components/navigation.tsx:7 pathName', 'color: #007acc;', pathName);
  return (
    <nav>
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
    </nav>
  )
}
