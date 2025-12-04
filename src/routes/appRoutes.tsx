import type { FC } from 'react'
import MainLayout from '../layouts/main/MainLayout'
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'
import ProjectsPage from '../pages/projects/ProjectsPage'
import ContactPage from '../pages/contact/ContactPage'

// For now this is a simple manual router placeholder.
// Later you can swap this for react-router or another router.
const AppRoutes: FC = () => {
  const path = window.location.pathname

  let PageComponent: FC

  switch (true) {
    case path === '/':
      PageComponent = HomePage
      break
    case path.startsWith('/about'):
      PageComponent = AboutPage
      break
    case path.startsWith('/projects'):
      PageComponent = ProjectsPage
      break
    case path.startsWith('/contact'):
      PageComponent = ContactPage
      break
    default:
      PageComponent = HomePage
  }

  return (
    <MainLayout>
      <PageComponent />
    </MainLayout>
  )
}

export default AppRoutes


