import type { FC, ReactNode } from 'react'
import Navbar from '../../components/common/Navbar'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <small>&copy; {new Date().getFullYear()} Ravibhushan Kumar</small>
      </footer>
    </div>
  )
}

export default MainLayout


