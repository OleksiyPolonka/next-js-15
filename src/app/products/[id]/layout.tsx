import { FC, ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({
  children
}) => {
  return (
    <div>
      {children}
      <div>feature product section</div>
    </div>
  )
}

export default Layout
