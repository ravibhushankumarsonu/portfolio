import type { FC, ReactNode } from 'react'
import Navbar from '../../components/common/Navbar'
import { site } from '../../data/site'

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
        <div className="footer-inner">
          <small className="muted">&copy; {new Date().getFullYear()} {site.name}</small>
          <div className="footer-links">
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
