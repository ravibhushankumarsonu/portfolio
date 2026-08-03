import type { FC, ReactNode } from 'react'
import './MainLayout.css'
import Navbar from '../../components/common/Navbar'
import { useNavigation, useSite, useUi } from '../../hooks/useContent'

type MainLayoutProps = {
  children: ReactNode
}

/**
 * Container for the site chrome: reads site + navigation content and passes it
 * to the presentational Navbar and footer.
 *
 * Chrome renders without a loading state — an empty nav bar during the first
 * paint is less jarring than a spinner in the header, and the shell keeps its
 * layout either way.
 */
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const site = useSite().data?.meta
  const nav = useNavigation().data?.meta
  const ui = useUi().data?.meta

  return (
    <div className="app-shell">
      <Navbar
        brand={site?.name ?? ''}
        links={nav?.primary ?? []}
        actions={nav?.actions ?? []}
        toggleLabel={ui?.navToggle ?? ''}
      />

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <div className="footer-inner">
          <small className="muted">
            &copy; {new Date().getFullYear()} {site?.name ?? ''}
          </small>
          <div className="footer-links">
            {(nav?.footer ?? []).map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
